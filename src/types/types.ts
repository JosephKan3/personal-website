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

interface AccountTransaction {
  account: Account;
  lastTransactionID: string;
}

// Usage
const accountTransaction: AccountTransaction = {
  account: {
    guaranteedStopLossOrderMode: "DISABLED",
    hedgingEnabled: false,
    id: "001-002-7616323-001",
    createdTime: "2022-03-09T17:24:47.605318441Z",
    currency: "CAD",
    createdByUserID: 7616323,
    alias: "Primary",
    marginRate: "0.02",
    lastTransactionID: "746",
    balance: "12597.4963",
    openTradeCount: 0,
    openPositionCount: 0,
    pendingOrderCount: 0,
    pl: "5837.7551",
    resettablePL: "5837.7551",
    resettablePLTime: "0",
    financing: "-216.2388",
    commission: "0.0000",
    dividendAdjustment: "0",
    guaranteedExecutionFees: "0.0000",
    orders: [],
    positions: [], // Assuming further refinement for these arrays
    trades: [], // Assuming further refinement for these arrays
    unrealizedPL: "0.0000",
    NAV: "12597.4963",
    marginUsed: "0.0000",
    marginAvailable: "12597.4963",
    positionValue: "0.0000",
    marginCloseoutUnrealizedPL: "0.0000",
    marginCloseoutNAV: "12597.4963",
    marginCloseoutMarginUsed: "0.0000",
    marginCloseoutPositionValue: "0.0000",
    marginCloseoutPercent: "0.00000",
    withdrawalLimit: "12597.4963",
    marginCallMarginUsed: "0.0000",
    marginCallPercent: "0.00000",
  },
  lastTransactionID: "746",
};
