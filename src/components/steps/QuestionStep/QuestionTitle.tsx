import React from 'react';

interface Props {
  text: string;
}

export const QuestionTitle: React.FC<Props> = ({ text }) => (
  <h2 className="text-xl font-semibold text-gray-800">{text}</h2>
);