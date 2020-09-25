import React from "react";
import { Table } from "antd";

const SimpleTable = (props) => (
  <Table
    columns={props.columns}
    dataSource={props.data}
    bordered={props.bordered}
    title={() => props.title}
    pagination={false}
  />
);

export default SimpleTable;
