import {
  _getRecentTransactions,
  _getDailyTransactionsSummary,
  _getClientMovements,
} from "./_DATA";

export const getRecentTransactions = () => _getRecentTransactions();

export const getDailyTransactionsSummary = () => _getDailyTransactionsSummary();

export const getClientMovements = () => _getClientMovements();
