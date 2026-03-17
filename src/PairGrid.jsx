import React, { useState } from 'react';
import { PAIRS } from './constants';

export default function PairGrid({ activePair, setActivePair }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPairs = PAIRS.filter(pair => {
    const searchLower = searchTerm.toLowerCase();
    const pairLower = pair.toLowerCase();
    if (pair === 'GOLDUSD') {
      return 'xau/usd'.includes(searchLower) || pairLower.includes(searchLower);
    }
    return pairLower.includes(searchLower);
  });

  return (
    <div className="mb-6 animate-fade-in-up delay-300 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col mb-4 gap-3">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Select Pair
        </h2>
        <div className="relative w-full">
          <input 
            type="text"
            placeholder="Search pairs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
      </div>
      
      {filteredPairs.length === 0 ? (
        <div className="text-center py-6 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner">
          No pairs found matching "{searchTerm}"
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {filteredPairs.map(pair => (
            <button
              key={pair}
              onClick={() => setActivePair(pair)}
              className={`p-3 rounded-2xl font-bold transition-all duration-200 border text-sm ${
                activePair === pair 
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:border-blue-400 dark:text-blue-200 shadow-md transform scale-[1.02]' 
                  : 'border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 shadow-sm'
              }`}
            >
              {pair === 'GOLDUSD' ? 'XAU/USD' : pair}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
