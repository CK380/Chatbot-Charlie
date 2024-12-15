import React from 'react';
import { useTranslation } from 'react-i18next';

export const FAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 text-white">
      <h2 className="text-2xl font-semibold text-orange-200">{t('faq.title')}</h2>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border border-orange-200 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2 text-orange-200">
              {t(`faq.q${i}`)}
            </h3>
            <p>{t(`faq.a${i}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};