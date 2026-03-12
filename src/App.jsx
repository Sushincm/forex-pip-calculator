import React, { useState, useEffect } from 'react';
import Header from './Header';
import RiskSettings from './RiskSettings';
import PairGrid from './PairGrid';
import ResultsPanel from './ResultsPanel';

function App() {
  const [accountBalance, setAccountBalance] = useState(() => {
    const saved = localStorage.getItem('accountBalance');
    return saved !== null ? Number(saved) : 10000;
  });
  const [riskPercentage, setRiskPercentage] = useState(() => {
    const saved = localStorage.getItem('riskPercentage');
    return saved !== null ? Number(saved) : 1.0;
  });
  const [activePair, setActivePair] = useState('GBPUSD');

  // Save to local storage when values change
  useEffect(() => {
    localStorage.setItem('accountBalance', accountBalance);
  }, [accountBalance]);

  useEffect(() => {
    localStorage.setItem('riskPercentage', riskPercentage);
  }, [riskPercentage]);

  return (
    <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        
        <main className="space-y-8 animate-fade-in-up">
          <RiskSettings 
            accountBalance={accountBalance}
            setAccountBalance={setAccountBalance}
            riskPercentage={riskPercentage}
            setRiskPercentage={setRiskPercentage}
          />
          
          <PairGrid 
            activePair={activePair}
            setActivePair={setActivePair}
          />
          
          <ResultsPanel 
            accountBalance={accountBalance}
            riskPercentage={riskPercentage}
            activePair={activePair}
          />
        </main>

        <footer className="mt-16 text-center text-sm text-gray-400 dark:text-gray-500 transition-colors duration-200">
          <p className="flex items-center justify-center gap-2">
            <a 
              href="https://github.com/Sushincm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
              <span className="font-medium">Sushincm</span>
            </a> &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
