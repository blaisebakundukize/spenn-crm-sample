import React from "react";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import CardSummary from "../CardSummary/CardSummary";

const ClientsSummary = () => {
  const clientMovements = useSelector((state) => state.clientMovements);

  return (
    <>
      {Object.keys(clientMovements).length === 0 ? null : (
        <div className='client-summary margin-bottom-small'>
          <Row gutter={24}>
            <Col span={6}>
              <CardSummary
                title='Clients today'
                description={clientMovements.today.today}
                last={clientMovements.today.last}
                descriptionClasses='text-blue-dark big-number'
              />
            </Col>
            <Col span={6}>
              <CardSummary
                title='Clients this month'
                description={clientMovements.month.thisMonth}
                last={clientMovements.month.last}
                descriptionClasses='text-blue-dark big-number'
              />
            </Col>
            <Col span={6}>
              <CardSummary
                title='New Clients'
                description={clientMovements.new.clients}
                last={clientMovements.new.last}
                descriptionClasses='text-blue-dark big-number'
              />
            </Col>
            <Col span={6}>
              <CardSummary
                title='Total Clients'
                description={clientMovements.totalClients}
                descriptionClasses='text-blue-dark big-number'
              />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ClientsSummary;
