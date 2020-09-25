import React from "react";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

import CardSummary from "../CardSummary/CardSummary";
import Pie from "../../Pie/Pie";

let dataTrans = [
  {
    id: "transfers",
    label: "transfers",
    value: 496,
    color: "hsl(29, 70%, 50%)",
  },
  {
    id: "deposits",
    label: "deposits",
    value: 595,
    color: "hsl(251, 70%, 50%)",
  },
  {
    id: "withdraws",
    label: "withdraws",
    value: 287,
    color: "hsl(42, 70%, 50%)",
  },
  {
    id: "payments",
    label: "payments",
    value: 333,
    color: "hsl(101, 70%, 50%)",
  },
];

let dataHourly = [
  {
    id: "06-12am",
    label: "From 06am to 12pm",
    value: 595,
    color: "hsl(251, 70%, 50%)",
  },
  {
    id: "12-18pm",
    label: "From 12pm to 18pm",
    value: 287,
    color: "hsl(42, 70%, 50%)",
  },
  {
    id: "00-06am",
    label: "From 00am to 06am",
    value: 496,
    color: "hsl(29, 70%, 50%)",
  },
  {
    id: "18-00pm",
    label: "From 18pm to 00am",
    value: 333,
    color: "hsl(101, 70%, 50%)",
  },
];

const applyValueToPieData = (pieData, dataFromStore) => {
  const newPieData = pieData.map((data) => {
    data.value = dataFromStore[data.id] || 0;
    return data;
  });

  return newPieData;
};

const TransactionsSummary = () => {
  const dailySummaryTransactions = useSelector(
    (state) => state.dailySummaryTransactions
  );
  if (Object.keys(dailySummaryTransactions).length > 0) {
    dataHourly = applyValueToPieData(
      dataHourly,
      dailySummaryTransactions.hourly
    );
    dataTrans = applyValueToPieData(dataTrans, dailySummaryTransactions.types);
  }
  return (
    <>
      {Object.keys(dailySummaryTransactions).length === 0 ? null : (
        <div className='transactions-summary margin-bottom-small'>
          <Row gutter={24}>
            <Col span={6}>
              <CardSummary
                title='Daily Transactions'
                description={dailySummaryTransactions.transactions.today}
                last={dailySummaryTransactions.transactions.last}
                descriptionClasses='text-blue-dark big-number'
                cardSummaryClasses='transactions-card-summary'
              />
            </Col>
            <Col span={9}>
              <div className='transactions-pie-wrapper'>
                <Pie data={dataHourly} />
              </div>
            </Col>
            <Col span={9}>
              <div className='transactions-pie-wrapper'>
                <Pie data={dataTrans} />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default TransactionsSummary;
