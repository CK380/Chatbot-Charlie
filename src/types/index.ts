export interface Question {
  id: string;
  text: string;
  type: 'text' | 'choice' | 'rating';
  options?: string[];
  required: boolean;
}

export interface Answer {
  questionId: string;
  value: string | number;
}

export interface EvaluationResult {
  userId: string;
  answers: Answer[];
  timestamp: Date;
  language: string;
}

export interface UserData {
  id: string;
  email: string;
  company: string;
  consent: boolean;
}

export interface AnalysisResult {
  recommendations: string[];
  potentialScore: number;
  automationAreas: string[];
}