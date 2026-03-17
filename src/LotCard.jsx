import React from 'react';

export default function LotCard({ label, lotSize, highlight, className = '' }) {
  const formattedLotSize = Number(lotSize).toFixed(2);

  return (
    <div 
      className={`p-6 rounded-3xl flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-md
        ${highlight 
          ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30' 
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700'
        }
        ${className}
      `}
    >
      <span className={`text-sm font-semibold tracking-wider mb-2 ${highlight ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
        {label}
      </span>
      <span className="text-4xl font-extrabold tracking-tight">
        {formattedLotSize}
      </span>
      <span className={`mt-2 text-xs font-medium uppercase ${highlight ? 'text-blue-200' : 'text-gray-400 dark:text-gray-500'}`}>
        Lots
      </span>
    </div>
  );
}
