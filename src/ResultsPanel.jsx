import React from "react";
import LotCard from "./LotCard";
import { PIP_VALUES } from "./constants";

export default function ResultsPanel({
  accountBalance,
  riskPercentage,
  activePair,
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        Results for{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {isGold ? "XAU/USD" : activePair}
        </span>
      </h2>

      {isGold ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <LotCard
            label="300 Points SL (30 Pips)"
            lotSize={calculateLotSize(30)}
            highlight={true}
          />
          <div className="text-gray-500 dark:text-gray-400 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-700/50">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
        </div>
      )}
    </div>
  );
}
