import React from "react";
import { Col, Row } from "antd";

import CardSummary from "../CardSummary/CardSummary";

const ClientsSummary = () => {
  return (
    <div className='client-summary margin-bottom-small'>
      <Row gutter={24}>
        <Col span={6}>
          <CardSummary
            title='Clients today'
            description='450'
            last='800'
            descriptionClasses='text-blue-dark big-number'
          />
        </Col>
        <Col span={6}>
          <CardSummary
            title='Clients this month'
            description='4k'
            last='6k'
            descriptionClasses='text-blue-dark big-number'
          />
        </Col>
        <Col span={6}>
          <CardSummary
            title='New Clients'
            description='23'
            last='45'
            descriptionClasses='text-blue-dark big-number'
          />
        </Col>
        <Col span={6}>
          <CardSummary
            title='Total Clients'
            description='100K'
            descriptionClasses='text-blue-dark big-number'
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientsSummary;
