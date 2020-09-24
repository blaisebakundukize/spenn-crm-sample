import React from "react";

import ClientsSummary from "../Summary/ClientsSummary/ClientsSummary";
import TransactionsSummary from "../Summary/TransactionsSummary/TransactionsSummary";

const Dashboard = () => {
  return (
    <div>
      <ClientsSummary />
      <TransactionsSummary />
    </div>
  );
};

export default Dashboard;
