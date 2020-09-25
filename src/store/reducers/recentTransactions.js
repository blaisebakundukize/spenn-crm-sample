import { RECEIVE_RECENT_TRANSACTIONS } from "../actions/transactions";

const recentTransactions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RECENT_TRANSACTIONS:
      return {
        ...state,
        ...action.recentTransactions,
      };
    default:
      return state;
  }
};

export default recentTransactions;
