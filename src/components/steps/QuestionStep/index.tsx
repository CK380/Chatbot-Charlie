import React from 'react';
import { useEvaluationStore } from '../../../store/evaluationStore';
import { questions } from '../../../data/questions';
import { NavigationButtons } from '../../common/NavigationButtons';
import { QuestionOption } from './QuestionOption';
import { QuestionTitle } from './QuestionTitle';

export const QuestionStep: React.FC = () => {
  const { currentStep, setAnswer } = useEvaluationStore();
  const question = questions[currentStep - 1];

  const handleAnswer = (value: string | number) => {
    setAnswer({ questionId: question.id, value });
  };

  return (
    <div className="space-y-4">
      <QuestionTitle text={question.text} />
      {question.type === 'choice' && (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <QuestionOption
              key={option}
              option={option}
              onSelect={handleAnswer}
            />
          ))}
        </div>
      )}
      <NavigationButtons />
    </div>
  );
};

export default QuestionStep;