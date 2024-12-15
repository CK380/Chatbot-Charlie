import { UserData, AnalysisResult } from '../types';

export const sendProposalEmail = async (
  userData: UserData,
  analysis: AnalysisResult
) => {
  // Implementation for sending emails
  console.log('Sending proposal to:', userData.email);
};