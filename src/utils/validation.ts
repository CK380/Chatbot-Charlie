export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const getValidationError = (field: string, value: string): string | null => {
  if (!validateRequired(value)) {
    return `${field} is required`;
  }
  
  if (field.toLowerCase() === 'email' && !validateEmail(value)) {
    return 'Please enter a valid email address';
  }
  
  return null;
};