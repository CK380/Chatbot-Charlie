import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEvaluationStore } from '../../../store/evaluationStore';
import { validateConsent } from '../../../utils/gdpr';
import NavigationButtons from '../../common/NavigationButtons';
import { UserDataForm } from './UserDataForm';
import { FormData } from './types';
import { toast } from 'react-hot-toast';

const UserDataStep: React.FC = () => {
  const { t } = useTranslation();
  const { setUserData } = useEvaluationStore();
  const [formData, setFormData] = useState<FormData>({
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
      toast.success(t('userDataStep.successMessage'));
    } catch (error) {
      toast.error(t('userDataStep.errorMessage'));
      console.error('Validation error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        {t('userDataStep.title')}
      </h2>
      <UserDataForm formData={formData} onChange={setFormData} />
      <NavigationButtons />
    </form>
  );
};

export default UserDataStep;