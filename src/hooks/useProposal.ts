import { useCallback } from 'react';
import { generatePDFReport } from '../utils/pdfGenerator';
import { sendProposalEmail } from '../services/emailService';
import { Answer, UserData } from '../types';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useProposal = () => {
  const { t } = useTranslation();

  const sendProposal = useCallback(async (userData: UserData, answers: Answer[]) => {
    try {
      const report = await generatePDFReport(answers);
      await sendProposalEmail(userData, report);
      toast.success(t('resultsStep.proposalSent'));
    } catch (error) {
      toast.error(t('resultsStep.proposalError'));
      throw error;
    }
  }, [t]);

  return { sendProposal };
};