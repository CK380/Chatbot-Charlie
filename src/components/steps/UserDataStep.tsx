import React, { useState } from 'react';
import { useEvaluationStore } from '../../store/evaluationStore';
import { validateConsent } from '../../utils/gdpr';
import NavigationButtons from '../common/NavigationButtons';
import { useTranslation } from 'react-i18next';

const UserDataStep: React.FC = () => {
  const { t } = useTranslation();
  const { setUserData } = useEvaluationStore();
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      validateConsent(formData.consent);
      setUserData({
        id: crypto.randomUUID(),
        ...formData
      });
    } catch (error) {
      console.error('Validation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {t('userDataStep.title')}
      </h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('userDataStep.emailLabel')}
        </label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-200 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
          className="rounded border-gray-300 text-orange-200 focus:ring-orange-200"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
        />
        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
          {t('userDataStep.consentLabel')}
        </label>
      </div>
      <NavigationButtons />
    </form>
  );
};

export default UserDataStep;