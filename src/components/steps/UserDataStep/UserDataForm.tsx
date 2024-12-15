import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormData } from './types';

interface Props {
  formData: FormData;
  onChange: (formData: FormData) => void;
}

export const UserDataForm: React.FC<Props> = ({ formData, onChange }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('userDataStep.emailLabel')}
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={formData.email}
          onChange={(e) => onChange({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('userDataStep.companyLabel')}
        </label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={formData.company}
          onChange={(e) => onChange({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          className="rounded border-gray-300 text-orange-200 focus:ring-orange-200"
          checked={formData.consent}
          onChange={(e) => onChange({ ...formData, consent: e.target.checked })}
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
          {t('userDataStep.consentLabel')}
        </label>
      </div>
    </>
  );
};