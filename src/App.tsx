import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ChatInterface } from './components/ChatInterface';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Toaster } from 'react-hot-toast';

type Tab = 'evaluation' | 'contact' | 'faq';

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('evaluation');

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-2xl mx-auto p-4">
        <div className="bg-black rounded-lg border border-orange-200 p-6 shadow-lg">
          {activeTab === 'evaluation' && <ChatInterface />}
          {activeTab === 'contact' && <Contact />}
          {activeTab === 'faq' && <FAQ />}
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;