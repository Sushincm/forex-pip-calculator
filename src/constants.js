// Core constants and configurations

export const PAIRS = [
  'AUDJPY', 'EURGBP', 'GBPUSD', 'CADCHF', 'EURUSD', 'GBPJPY', 
  'USDCHF', 'USDJPY', 'CADJPY', 'AUDUSD', 'USDCAD', 'GOLDUSD'
];

export const PIP_VALUES = {
  // USD quote pairs (fixed $10)
  EURUSD: 10,
  GBPUSD: 10,
  AUDUSD: 10,
  GOLDUSD: 10, // $10 per pip (actually 300 points = 30 pips, so 30 * 10 = $300 risk per standard lot)
  
  // Non-USD/Cross pairs (estimated based on average conversion rates)
  // Phase 1: hardcoded estimates
  EURGBP: 12.50,
  AUDJPY: 6.50,
  CADCHF: 11.20,
  GBPJPY: 6.50,
  USDCHF: 11.20,
  USDJPY: 6.50,
  CADJPY: 6.50,
  USDCAD: 7.40
};
