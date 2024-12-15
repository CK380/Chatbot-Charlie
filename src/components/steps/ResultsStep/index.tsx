import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEvaluationStore } from '../../../store/evaluationStore';
import { useProposal } from '../../../hooks/useProposal';
import { useStorage } from '../../../hooks/useStorage';
import { useAnalytics } from '../../../hooks/useAnalytics';
import { ProposalButton } from './ProposalButton';
import { Summary } from './Summary';

const ResultsStep: React.FC = () => {
  const { t } = useTranslation();
  const { answers, userData } = useEvaluationStore();
  const { sendProposal } = useProposal();
  const { saveEvaluation } = useStorage();
  const { trackUserEvaluation } = useAnalytics();

  const handleSendProposal = async () => {
    if (!userData) return;

    try {
      // Save to Google Sheets
      await saveEvaluation({
        userId: userData.id,
        answers,
        timestamp: new Date(),
        language: 'en'
      });

      // Send proposal email
      await sendProposal(userData, answers);

      // Track analytics
      await trackUserEvaluation(userData.id, answers);
    } catch (error) {
      console.error('Error in results processing:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">
        {t('resultsStep.title')}
      </h2>
      <Summary />
      <ProposalButton onSendProposal={handleSendProposal} />
    </div>
  );
};

export default ResultsStep;