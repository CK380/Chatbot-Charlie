import { ButtonVariant } from './types';

const baseClasses = 'px-4 py-2 rounded-md transition-colors';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800',
  secondary: 'bg-orange-200 text-black hover:bg-orange-300',
  outline: 'border border-orange-200 text-gray-600 hover:bg-orange-50'
};

export const getButtonClasses = (variant: ButtonVariant, additionalClasses: string = ''): string => {
  return `${baseClasses} ${variantClasses[variant]} ${additionalClasses}`.trim();
};