import { useCallback } from 'react';
import { useEvaluationStore } from '../../../store/evaluationStore';

export const useNavigation = () => {
  const { currentStep, setCurrentStep } = useEvaluationStore();

  const handleBack = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep, setCurrentStep]);

  const handleNext = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep, setCurrentStep]);

  return {
    canGoBack: currentStep > 0,
    handleBack,
    handleNext
  };
};