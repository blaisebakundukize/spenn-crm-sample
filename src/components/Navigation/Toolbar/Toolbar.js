import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Toolbar = ({ toggleCollapsed, collapsed }) => {
  return (
    <Header className='header-layout'>
      <div className='header-logo-container'>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggleCollapsed,
          }
        )}
        <h3 className='header-logo-text'>SCS</h3>
      </div>
    </Header>
  );
};

export default Toolbar;
