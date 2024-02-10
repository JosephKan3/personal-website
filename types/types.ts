interface Account {
  guaranteedStopLossOrderMode: string;
  hedgingEnabled: boolean;
  id: string;
  createdTime: string;
  currency: string;
  createdByUserID: number;
  alias: string;
  marginRate: string;
  lastTransactionID: string;
  balance: string;
  openTradeCount: number;
  openPositionCount: number;
  pendingOrderCount: number;
  pl: string;
  resettablePL: string;
  resettablePLTime: string;
  financing: string;
  commission: string;
  dividendAdjustment: string;
  guaranteedExecutionFees: string;
  orders: any[]; // Array type needs further refinement
  positions: any[]; // Array type needs further refinement
  trades: any[]; // Array type needs further refinement
  unrealizedPL: string;
  NAV: string;
  marginUsed: string;
  marginAvailable: string;
  positionValue: string;
  marginCloseoutUnrealizedPL: string;
  marginCloseoutNAV: string;
  marginCloseoutMarginUsed: string;
  marginCloseoutPositionValue: string;
  marginCloseoutPercent: string;
  withdrawalLimit: string;
  marginCallMarginUsed: string;
  marginCallPercent: string;
}

interface Transaction {
  id: string;
  time: string;
  userID: number;
  accountID: string;
  batchID: string;
  requestID: string;
}
