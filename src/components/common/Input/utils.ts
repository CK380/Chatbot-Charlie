export const getInputClasses = (additionalClasses: string = '', hasError: boolean): string => {
  const baseClasses = 'mt-1 block w-full rounded-md shadow-sm';
  const stateClasses = hasError
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:border-orange-200 focus:ring-orange-200';
  
  return `${baseClasses} ${stateClasses} ${additionalClasses}`.trim();
};