import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 text-white">
      <h2 className="text-2xl font-semibold text-orange-200">{t('contact.title')}</h2>
      <div className="space-y-4">
        <p>{t('contact.description')}</p>
        <div className="border border-orange-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2 text-orange-200">{t('contact.email')}</h3>
          <p>contact@example.com</p>
        </div>
        <div className="border border-orange-200 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2 text-orange-200">{t('contact.phone')}</h3>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};