import React from "react";
import LotCard from "./LotCard";
import { PIP_VALUES } from "./constants";

export default function ResultsPanel({
  accountBalance,
  riskPercentage,
  activePair,
  customPips,
  setCustomPips,
}) {
  // Total risk amount
  const riskAmount = accountBalance * (riskPercentage / 100);

  // Get pip value estimating non-USD values or defaulting to 10
  const pipValue = PIP_VALUES[activePair] || 10;

  // Function to calculate lot size
  const calculateLotSize = (slInPips) => {
    if (riskAmount <= 0) return 0;
    const lotSize = riskAmount / (slInPips * pipValue);
    return lotSize;
  };

  const isGold = activePair === "GOLDUSD";

  const handleCustomPipsChange = (e) => {
    const val = e.target.value;
    setCustomPips((prev) => ({
      ...prev,
      [activePair]: val ? Number(val) : "",
    }));
  };

  const currentCustomPip = customPips[activePair] || "";
  const customLotSize = currentCustomPip ? calculateLotSize(currentCustomPip) : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up delay-[400ms]">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Results for{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {isGold ? "XAU/USD" : activePair}
        </span>
      </h2>

      {isGold ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <LotCard
            label="300 Points SL (30 Pips)"
            lotSize={calculateLotSize(30)}
            highlight={true}
          />
          {/* Custom Pips Card */}
          <div className="p-6 rounded-3xl flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center w-full mb-2">
              <label className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-1 uppercase">
                Custom SL
              </label>
              <input 
                type="number"
                value={currentCustomPip}
                onChange={handleCustomPipsChange}
                placeholder="e.g. 15"
                step="0.1"
                min="0"
                className="w-24 text-center text-sm font-bold p-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-gray-100"
              />
            </div>
            <span className="text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              {Number(customLotSize).toFixed(2)}
            </span>
            <span className="mt-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
              Lots
            </span>
          </div>
          <div className="text-gray-500 dark:text-gray-400 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-700/50 md:col-span-2">
            <p className="font-medium text-yellow-800 dark:text-yellow-600">
              Note for Gold (XAU/USD):
            </p>
            <p className="text-sm mt-1">
              Calculations are based on a fixed 300 points / 30 pips stop loss
              parameter as specified in the rules.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <LotCard
            label="5 Pips SL"
            lotSize={calculateLotSize(5)}
            highlight={true}
          />
          <LotCard
            label="7 Pips SL"
            lotSize={calculateLotSize(7)}
            highlight={true}
          />
          <LotCard
            label="10 Pips SL"
            lotSize={calculateLotSize(10)}
            highlight={true}
          />
          
          {/* Custom Pips Card */}
          <div className="p-6 rounded-3xl flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col items-center w-full mb-2">
              <label className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-1 uppercase">
                Custom SL
              </label>
              <input 
                type="number"
                value={currentCustomPip}
                onChange={handleCustomPipsChange}
                placeholder="e.g. 15"
                step="0.1"
                min="0"
                className="w-24 text-center text-sm font-bold p-1 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-gray-100"
              />
            </div>
            <span className="text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              {Number(customLotSize).toFixed(2)}
            </span>
            <span className="mt-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
              Lots
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
