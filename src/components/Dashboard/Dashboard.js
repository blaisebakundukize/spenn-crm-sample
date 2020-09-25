import React from "react";

import ClientsSummary from "../Summary/ClientsSummary/ClientsSummary";
import TransactionsSummary from "../Summary/TransactionsSummary/TransactionsSummary";
import RecentTransactionsTable from "../Summary/RecentTransactionsTable/RecentTransactionsTable";

const Dashboard = () => {
  return (
    <div>
      <ClientsSummary />
      <TransactionsSummary />
      <RecentTransactionsTable />
    </div>
  );
};

export default Dashboard;
