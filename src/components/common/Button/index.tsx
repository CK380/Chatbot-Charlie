import React from 'react';
import { ButtonProps } from './types';
import { getButtonClasses } from './utils';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const buttonClasses = getButtonClasses(variant, className);
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};