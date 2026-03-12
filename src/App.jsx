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

        <footer className="mt-16 text-center text-sm text-gray-400 dark:text-gray-500">
          <p>Sushin &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
