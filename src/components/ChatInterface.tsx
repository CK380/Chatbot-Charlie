import React from 'react';
import { useEvaluationStore } from '../store/evaluationStore';
import { QuestionStep } from './steps/QuestionStep';
import UserDataStep from './steps/UserDataStep';
import ResultsStep from './steps/ResultsStep';

export const ChatInterface: React.FC = () => {
  const { currentStep } = useEvaluationStore();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md border border-orange-200 p-6">
          {currentStep === 0 && <UserDataStep />}
          {currentStep > 0 && currentStep <= 5 && <QuestionStep />}
          {currentStep > 5 && <ResultsStep />}
        </div>
      </div>
    </div>
  );
};