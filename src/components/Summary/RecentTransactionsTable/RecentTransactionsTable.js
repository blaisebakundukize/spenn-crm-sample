import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import SimpleTable from "../../SimpleTable/SimpleTable";

const recentTransferColumns = [
  {
    title: "From",
    dataIndex: "from",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "To",
    dataIndex: "to",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];

const recentWithdrawsAndDepositsColumns = [
  {
    title: "Account",
    dataIndex: "account",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];

// Format data for recent transfer table
const formatDataOfTransfer = (data) => {
  let recentTransferData = [];
  for (const elt of data) {
    recentTransferData.push({
      key: elt.id,
      from: elt.accountFrom,
      to: elt.accountTo,
      amount: elt.amount,
      time: elt.time,
    });
  }
  return recentTransferData;
};

// Format data for recent withdraws and deposits table
const formatDataOfWithdrawsAndDeposits = (data) => {
  let recentWithdrawsAndDepositsData = [];
  for (const elt of data) {
    recentWithdrawsAndDepositsData.push({
      key: elt.id,
      account: elt.account,
      amount: elt.amount,
      description: elt.description,
      time: elt.time,
    });
  }
  return recentWithdrawsAndDepositsData;
};

const RecentTransactionTable = () => {
  const recentTransactions = useSelector((state) => state.recentTransactions);
  let recentTransferData = [];
  let recentWithdrawsAndDepositsData = [];

  if (Object.keys(recentTransactions).length > 0) {
    recentTransferData = formatDataOfTransfer(recentTransactions.transfers);
    recentWithdrawsAndDepositsData = formatDataOfWithdrawsAndDeposits(
      recentTransactions.withdrawsAndDeposits
    );
  }

  return (
    <>
      {Object.keys(recentTransactions).length === 0 ? null : (
        <Row gutter={24}>
          <Col span={12}>
            <SimpleTable
              bordered={true}
              title={<div className='card-summary-title'>Recent Transfers</div>}
              columns={recentTransferColumns}
              data={recentTransferData}
            />
          </Col>
          <Col span={12}>
            <SimpleTable
              bordered={true}
              title={
                <div className='card-summary-title'>
                  Recent Withdraws & Deposits
                </div>
              }
              columns={recentWithdrawsAndDepositsColumns}
              data={recentWithdrawsAndDepositsData}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default RecentTransactionTable;
