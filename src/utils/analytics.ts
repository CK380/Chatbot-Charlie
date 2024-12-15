import { Answer } from '../types';

export const calculateCompletionRate = (answers: Answer[], totalQuestions: number): number => {
  return (answers.length / totalQuestions) * 100;
};

export const getCommonResponses = (answers: Answer[]): Record<string, number> => {
  return answers.reduce((acc, answer) => {
    const value = String(answer.value);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};