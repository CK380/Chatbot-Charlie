import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';

interface Props {
  onSendProposal: () => Promise<void>;
}

export const ProposalButton: React.FC<Props> = ({ onSendProposal }) => {
  const { t } = useTranslation();

  const handleClick = async () => {
    try {
      await onSendProposal();
      toast.success(t('resultsStep.proposalSent'));
    } catch (error) {
      toast.error(t('resultsStep.proposalError'));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
    >
      {t('resultsStep.sendProposal')}
    </button>
  );
};