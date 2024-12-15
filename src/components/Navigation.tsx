import React from 'react';
import { useTranslation } from 'react-i18next';

type Tab = 'evaluation' | 'contact' | 'faq';

interface Props {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Navigation: React.FC<Props> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-black p-4 mb-8 border-b border-orange-200">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-orange-200 text-xl font-semibold mr-8">Charlie</span>
          <div className="flex space-x-4">
            {['evaluation', 'contact', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab as Tab)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-orange-200 text-black'
                    : 'text-orange-200 hover:bg-gray-800'
                }`}
              >
                {t(`navigation.${tab}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};