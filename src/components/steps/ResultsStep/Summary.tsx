import React from 'react';
import { useTranslation } from 'react-i18next';

export const Summary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-orange-50 p-4 rounded-md">
      <p className="text-gray-700">
        {t('resultsStep.summary')}
      </p>
    </div>
  );
};