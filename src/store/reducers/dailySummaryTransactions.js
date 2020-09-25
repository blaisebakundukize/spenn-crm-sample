import { RECEIVE_DAILY_TRANSACTIONS_SUMMARY } from "../actions/transactions";

const dailySummaryTransactions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DAILY_TRANSACTIONS_SUMMARY:
      return {
        ...state,
        ...action.transactionsSummary,
      };
    default:
      return state;
  }
};

export default dailySummaryTransactions;
