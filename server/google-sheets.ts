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
      // Create JWT auth using service account credentials
      this.auth = new google.auth.JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      });

      await this.auth.authorize();
      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
      
      // Initialize headers if sheet is empty
      await this.initializeHeaders();
    } catch (error) {
      console.error('Failed to initialize Google Sheets:', error);
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