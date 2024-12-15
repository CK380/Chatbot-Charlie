export const validateConsent = (consent: boolean) => {
  if (!consent) {
    throw new Error('GDPR consent is required');
  }
  return true;
};

export const anonymizeData = (data: any) => {
  // Implementation for data anonymization
  return data;
};