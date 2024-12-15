import create from 'zustand';
import { Answer, UserData } from '../types';

interface EvaluationStore {
  currentStep: number;
  answers: Answer[];
  userData: UserData | null;
  setCurrentStep: (step: number) => void;
  setAnswer: (answer: Answer) => void;
  setUserData: (data: UserData) => void;
  reset: () => void;
}

export const useEvaluationStore = create<EvaluationStore>((set) => ({
  currentStep: 0,
  answers: [],
  userData: null,
  setCurrentStep: (step) => set({ currentStep: step }),
  setAnswer: (answer) =>
    set((state) => ({
      answers: [...state.answers.filter(a => a.questionId !== answer.questionId), answer]
    })),
  setUserData: (data) => set({ userData: data }),
  reset: () => set({ currentStep: 0, answers: [], userData: null })
}));