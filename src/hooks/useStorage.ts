import { useCallback } from 'react';
import { saveToGoogleSheets } from '../services/storage';
import { EvaluationResult } from '../types';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useStorage = () => {
  const { t } = useTranslation();

  const saveEvaluation = useCallback(async (result: EvaluationResult) => {
    try {
      await saveToGoogleSheets(result);
      toast.success(t('storage.saveSuccess'));
    } catch (error) {
      toast.error(t('storage.saveError'));
      throw error;
    }
  }, [t]);

  return { saveEvaluation };
};