import {
  getClientMovements,
  getDailyTransactionsSummary,
  getRecentTransactions,
} from "../../utils/api";
import {
  receiveDailyTransactionsSummary,
  receiveRecentTransactions,
} from "./transactions";
import { receiveClientMovements } from "./clients";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export default function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const recentTransactions = await getRecentTransactions();
    const dailyTransactionsSummary = await getDailyTransactionsSummary();
    const clientMovements = await getClientMovements();

    dispatch(receiveDailyTransactionsSummary(dailyTransactionsSummary));
    dispatch(receiveClientMovements(clientMovements));
    dispatch(receiveRecentTransactions(recentTransactions));

    dispatch(hideLoading());
  };
}
