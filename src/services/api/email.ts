import { UserData, AnalysisResult } from '../../types';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const sendEmail = async (
  userData: UserData,
  analysis: AnalysisResult
) => {
  const response = await axios.post(`${API_URL}/send-email`, {
    userData,
    analysis
  });
  return response.data;
};