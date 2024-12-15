import { google } from 'googleapis';
import { EvaluationResult } from '../../types';

const SPREADSHEET_ID = '1Z9e0B1RuSsOmVNmkShp312ZKrR63phnm-MGBF42-EYI';
const RANGE = 'Responses!A:F';

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(import.meta.env.VITE_GOOGLE_CREDENTIALS),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export const saveToGoogleSheets = async (result: EvaluationResult) => {
  try {
    const { userId, answers, timestamp, language } = result;
    
    const values = [
      [
        userId,
        timestamp.toISOString(),
        language,
        ...answers.map(a => a.value),
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    throw error;
  }
};