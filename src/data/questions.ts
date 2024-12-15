import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'current_ai_usage',
    text: 'How is your organization currently using AI?',
    type: 'choice',
    options: [
      'Not using AI at all',
      'Basic automation tasks',
      'Advanced AI implementation',
      'Exploring AI possibilities'
    ],
    required: true
  },
  {
    id: 'business_goals',
    text: 'What are your primary business goals for AI implementation?',
    type: 'choice',
    options: [
      'Increase efficiency',
      'Reduce costs',
      'Improve customer experience',
      'Innovation and new capabilities'
    ],
    required: true
  },
  {
    id: 'budget_range',
    text: 'What is your estimated budget range for AI implementation?',
    type: 'choice',
    options: [
      'Under $10,000',
      '$10,000 - $50,000',
      '$50,000 - $100,000',
      'Over $100,000'
    ],
    required: true
  },
  {
    id: 'timeline',
    text: 'What is your expected timeline for implementation?',
    type: 'choice',
    options: [
      '1-3 months',
      '3-6 months',
      '6-12 months',
      'Over 12 months'
    ],
    required: true
  },
  {
    id: 'technical_expertise',
    text: 'What is your current level of technical expertise?',
    type: 'choice',
    options: [
      'Beginner',
      'Intermediate',
      'Advanced',
      'Expert'
    ],
    required: true
  }
];