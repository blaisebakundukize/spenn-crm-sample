import { combineReducers } from "redux";
import clientMovements from "./clientMovements";
import dailySummaryTransactions from "./dailySummaryTransactions";
import recentTransactions from "./recentTransactions";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  clientMovements,
  dailySummaryTransactions,
  recentTransactions,
  loadingBar: loadingBarReducer,
});
