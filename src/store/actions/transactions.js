export const RECEIVE_RECENT_TRANSACTIONS = "RECEIVE_RECENT_TRANSACTIONS";
export const RECEIVE_DAILY_TRANSACTIONS_SUMMARY =
  "RECEIVE_DAILY_TRANSACTIONS_SUMMARY";

export const receiveRecentTransactions = (recentTransactions) => ({
  type: RECEIVE_RECENT_TRANSACTIONS,
  recentTransactions,
});

export const receiveDailyTransactionsSummary = (transactionsSummary) => ({
  type: RECEIVE_DAILY_TRANSACTIONS_SUMMARY,
  transactionsSummary,
});
