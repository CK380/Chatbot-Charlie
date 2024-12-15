import React from 'react';
import { InputProps } from './types';
import { getInputClasses } from './utils';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  const inputClasses = getInputClasses(className, !!error);

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};