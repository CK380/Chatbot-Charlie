import React from 'react';
import { useEvaluationStore } from '../../store/evaluationStore';
import { questions } from '../../data/questions';
import NavigationButtons from '../common/NavigationButtons';

const QuestionStep: React.FC = () => {
  const { currentStep, setAnswer } = useEvaluationStore();
  const question = questions[currentStep - 1];

  const handleAnswer = (value: string | number) => {
    setAnswer({ questionId: question.id, value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{question.text}</h2>
      {question.type === 'choice' && (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full p-3 text-left rounded-md border border-orange-200 hover:bg-orange-50"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <NavigationButtons />
    </div>
  );
};