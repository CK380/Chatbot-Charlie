import React from 'react';

interface Props {
  option: string;
  onSelect: (option: string) => void;
}

export const QuestionOption: React.FC<Props> = ({ option, onSelect }) => (
  <button
    onClick={() => onSelect(option)}
    className="w-full p-3 text-left rounded-md border border-orange-200 hover:bg-orange-50"
  >
    {option}
  </button>
);