import React from "react";
import { Row, Col } from "antd";

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
    title: "Date",
    dataIndex: "date",
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
    title: "Date",
    dataIndex: "date",
  },
];

const recentTransferData = [
  {
    key: "1",
    from: "Blaise Bakundukize",
    to: "Floribert Mwibutsa",
    amount: "$400",
    date: "2020/09/12",
  },
  {
    key: "2",
    from: "Blaise Bakundukize",
    to: "Floribert Mwibutsa",
    amount: "$400",
    date: "2020/09/12",
  },
  {
    key: "3",
    from: "Blaise Bakundukize",
    to: "Floribert Mwibutsa",
    amount: "$400",
    date: "2020/09/12",
  },
  {
    key: "4",
    from: "Blaise Bakundukize",
    to: "Floribert Mwibutsa",
    amount: "$400",
    date: "2020/09/12",
  },
  {
    key: "5",
    from: "Blaise Bakundukize",
    to: "Floribert Mwibutsa",
    amount: "$400",
    date: "2020/09/12",
  },
];

const recentWithdrawsAndDepositsData = [
  {
    key: "1",
    account: "Blaise Bakundukize",
    amount: "$400",
    description: "Withdraw",
    date: "2020/09/12",
  },
  {
    key: "2",
    account: "Blaise Bakundukize",
    amount: "$400",
    description: "Deposit",
    date: "2020/09/12",
  },
  {
    key: "3",
    account: "Blaise Bakundukize",
    amount: "$400",
    description: "Withdraw",
    date: "2020/09/12",
  },
  {
    key: "4",
    account: "Blaise Bakundukize",
    amount: "$400",
    description: "Withdraw",
    date: "2020/09/12",
  },
  {
    key: "5",
    account: "Blaise Bakundukize",
    amount: "$400",
    description: "Deposit",
    date: "2020/09/12",
  },
];

const RecentTransactionTable = () => {
  return (
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
  );
};

export default RecentTransactionTable;
