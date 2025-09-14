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
      
      // Clean up the private key format
      privateKey = privateKey
        .replace(/\\n/g, '\n')
        .replace(/\\\\/g, '\\')
        .trim();
      
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
      
      // Use GoogleAuth.fromJSON instead of JWT
      const auth = new google.auth.GoogleAuth({
        credentials: serviceAccountKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });
      
      this.auth = await auth.getClient() as JWT;
      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
      
      console.log('Google Sheets authentication successful');
      
      // Initialize headers if sheet is empty
      await this.initializeHeaders();
    } catch (error) {
      console.error('Failed to initialize Google Sheets:', error);
      console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  private async initializeHeaders() {
    try {
      // Check if headers exist
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:C1`,
      });

      // If no headers, add them
      if (!response.data.values || response.data.values.length === 0) {
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A1:C1`,
          valueInputOption: 'RAW',
          resource: {
            values: [['Email', 'Date Added', 'Source']]
          }
        });
      }
    } catch (error) {
      console.error('Failed to initialize headers:', error);
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

      // Add email to sheet
      const timestamp = new Date().toISOString();
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:C`,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[email, timestamp, 'Website Signup']]
        }
      });

      return true;
    } catch (error) {
      console.error('Failed to add email to Google Sheets:', error);
      throw error;
    }
  }

  async getAllEmails(): Promise<string[]> {
    try {
      if (!this.sheets) {
        await this.initialize();
      }

      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:A`,
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
      return [];
    }
  }

  async getEmailCount(): Promise<number> {
    const emails = await this.getAllEmails();
    return emails.length;
  }
}

export const googleSheetsService = new GoogleSheetsService();