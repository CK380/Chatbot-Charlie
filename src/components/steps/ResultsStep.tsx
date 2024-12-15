import React from 'react';
import { useEvaluationStore } from '../../store/evaluationStore';
import { generatePDFReport } from '../../utils/pdfGenerator';
import { sendProposalEmail } from '../../services/emailService';
import { useTranslation } from 'react-i18next';
import { trackEvaluation } from '../../services/analyticsService';

const ResultsStep: React.FC = () => {
  const { t } = useTranslation();
  const { answers, userData } = useEvaluationStore();

  const handleSendProposal = async () => {
    if (!userData) return;

    try {
      const report = await generatePDFReport(answers);
      await sendProposalEmail(userData, report);
      await trackEvaluation({
        userId: userData.id,
        answers,
        timestamp: new Date(),
        language: 'en'
      });
    } catch (error) {
      console.error('Error sending proposal:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        {t('resultsStep.title')}
      </h2>
      <div className="bg-orange-50 p-4 rounded-md">
        <p className="text-gray-700">
          {t('resultsStep.summary')}
        </p>
      </div>
      <button
        onClick={handleSendProposal}
        className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        {t('resultsStep.sendProposal')}
      </button>
    </div>
  );
};

export default ResultsStep;