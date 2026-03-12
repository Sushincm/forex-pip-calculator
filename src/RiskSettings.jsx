import React from 'react';

export default function RiskSettings({ accountBalance, setAccountBalance, riskPercentage, setRiskPercentage }) {
  const riskAmount = (accountBalance * (riskPercentage / 100)).toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Risk Parameters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Account Balance ($)
          </label>
          <input 
            type="number"
            value={accountBalance}
            onChange={(e) => setAccountBalance(Number(e.target.value))}
            className="w-full text-lg p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="e.g. 10000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Risk Percentage (%)
          </label>
          <input 
            type="number"
            value={riskPercentage}
            onChange={(e) => setRiskPercentage(Number(e.target.value))}
            step="0.1"
            className="w-full text-lg p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="e.g. 1.0"
          />
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center text-lg">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Risk Amount:</span>
          <span className="font-bold text-red-500 dark:text-red-400 text-2xl">${riskAmount}</span>
        </div>
      </div>
    </div>
  );
}
