import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Google Sheets configuration
const SPREADSHEET_ID = '1cnFu-UYJRXsSgl5KY9e7-Kr-WC2d060kfkxNz6iO4_w';
const SHEET_NAME = 'Waitlist'; // Change this to your sheet tab name

class GoogleSheetsService {
  private auth: JWT | null = null;
  private sheets: any = null;

  async initialize() {
    try {
      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      let privateKey = process.env.GOOGLE_PRIVATE_KEY;
      
      if (!clientEmail || !privateKey) {
        throw new Error('Google service account credentials not found in environment variables');
      }
      
      // Clean up the private key format - handle various encoding issues
      privateKey = privateKey
        .replace(/\\n/g, '\n')
        .replace(/\\\\/g, '\\')
        .replace(/"/g, '')
        .trim();
      
      // Ensure proper PEM format
      if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
        privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
      } else if (!privateKey.includes('\n')) {
        // If it's all on one line, format it properly
        const keyContent = privateKey
          .replace('-----BEGIN PRIVATE KEY-----', '')
          .replace('-----END PRIVATE KEY-----', '')
          .trim();
        privateKey = `-----BEGIN PRIVATE KEY-----\n${keyContent}\n-----END PRIVATE KEY-----`;
      }
      
      console.log('Initializing Google Sheets with service account:', clientEmail);
      
      // Create service account JSON object
      const serviceAccountKey = {
        type: "service_account",
        client_email: clientEmail,
        private_key: privateKey,
        private_key_id: "key-id", // This can be a placeholder
        project_id: "flyqupon", // This can be a placeholder
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
      };
      
      // Use JWT directly for more reliable authentication
      this.auth = new google.auth.JWT({
        email: serviceAccountKey.client_email,
        key: serviceAccountKey.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });
      
      // Explicitly authorize the JWT
      await this.auth.authorize();
      
      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
      
      console.log('Google Sheets authentication successful');
      
      // Validate sheet exists and initialize headers
      await this.validateAndInitializeSheet();
    } catch (error) {
      console.error('Failed to initialize Google Sheets:', error);
      if (error.response?.data) {
        console.error('Google API error details:', JSON.stringify(error.response.data, null, 2));
      }
      console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  private async validateAndInitializeSheet() {
    try {
      // First, get the spreadsheet metadata to check available sheets
      const spreadsheet = await this.sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      });
      
      const availableSheets = spreadsheet.data.sheets?.map(sheet => sheet.properties?.title) || [];
      console.log('Available sheet tabs:', availableSheets);
      
      if (!availableSheets.includes(SHEET_NAME)) {
        throw new Error(`Sheet tab '${SHEET_NAME}' not found. Available tabs: ${availableSheets.join(', ')}. Please create a tab named '${SHEET_NAME}' or update the SHEET_NAME configuration.`);
      }
      
      // Now initialize headers with proper quoting
      await this.initializeHeaders();
    } catch (error) {
      console.error('Failed to validate sheet:', error);
      if (error.response?.data) {
        console.error('Google API error details:', JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  }

  private async initializeHeaders() {
    try {
      const quotedSheetName = "'" + SHEET_NAME.replace(/'/g, "''") + "'";
      const range = `${quotedSheetName}!A1:C1`;
      
      // Check if headers exist
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: range,
      });

      // If no headers, add them
      if (!response.data.values || response.data.values.length === 0) {
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: range,
          valueInputOption: 'RAW',
          resource: {
            values: [['Email', 'Date Added', 'Source']]
          }
        });
        console.log('Added headers to Google Sheet');
      } else {
        console.log('Headers already exist in Google Sheet');
      }
    } catch (error) {
      console.error('Failed to initialize headers:', error);
      if (error.response?.data) {
        console.error('Google API error details:', JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  }

  async addEmail(email: string): Promise<boolean> {
    try {
      if (!this.sheets) {
        await this.initialize();
      }

      // Check for duplicates
      const existingEmails = await this.getAllEmails();
      if (existingEmails.includes(email.toLowerCase())) {
        return false; // Email already exists
      }

      // Add email to sheet with proper quoting
      const quotedSheetName = "'" + SHEET_NAME.replace(/'/g, "''") + "'";
      const timestamp = new Date().toISOString();
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${quotedSheetName}!A:C`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[email, timestamp, 'Website Signup']]
        }
      });

      return true;
    } catch (error) {
      console.error('Failed to add email to Google Sheets:', error);
      if (error.response?.data) {
        console.error('Google API error details:', JSON.stringify(error.response.data, null, 2));
      }
      throw error;
    }
  }

  async getAllEmails(): Promise<string[]> {
    try {
      if (!this.sheets) {
        await this.initialize();
      }

      const quotedSheetName = "'" + SHEET_NAME.replace(/'/g, "''") + "'";
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${quotedSheetName}!A:A`,
      });

      if (!response.data.values) {
        return [];
      }

      // Skip header row and return emails
      return response.data.values
        .slice(1)
        .map((row: string[]) => row[0]?.toLowerCase())
        .filter(Boolean);
    } catch (error) {
      console.error('Failed to get emails from Google Sheets:', error);
      if (error.response?.data) {
        console.error('Google API error details:', JSON.stringify(error.response.data, null, 2));
      }
      return [];
    }
  }

  async getEmailCount(): Promise<number> {
    const emails = await this.getAllEmails();
    return emails.length;
  }
}

export const googleSheetsService = new GoogleSheetsService();