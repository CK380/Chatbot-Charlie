import React from 'react';
import { useEvaluationStore } from '../../store/evaluationStore';

const NavigationButtons: React.FC = () => {
  const { currentStep, setCurrentStep } = useEvaluationStore();

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={() => setCurrentStep(currentStep - 1)}
        className="px-4 py-2 text-gray-600 border border-orange-200 rounded-md hover:bg-orange-50"
        disabled={currentStep === 0}
      >
        Back
      </button>
      <button
        onClick={() => setCurrentStep(currentStep + 1)}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Next
      </button>
    </div>
  );
};