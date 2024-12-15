import React from 'react';
import { Button } from '../Button';
import { useNavigation } from './useNavigation';

export const NavigationButtons: React.FC = () => {
  const { canGoBack, handleBack, handleNext } = useNavigation();

  return (
    <div className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={handleBack}
        disabled={!canGoBack}
      >
        Back
      </Button>
      <Button
        variant="primary"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};