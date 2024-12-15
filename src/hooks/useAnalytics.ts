import { useCallback } from 'react';
import { trackEvaluation } from '../services/analyticsService';
import { Answer } from '../types';
import { useTranslation } from 'react-i18next';

export const useAnalytics = () => {
  const { i18n } = useTranslation();

  const trackUserEvaluation = useCallback(async (userId: string, answers: Answer[]) => {
    await trackEvaluation({
      userId,
      answers,
      timestamp: new Date(),
      language: i18n.language
    });
  }, [i18n.language]);

  return { trackUserEvaluation };
};