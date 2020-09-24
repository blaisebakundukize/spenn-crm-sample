import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  DashboardOutlined,
  UserOutlined,
  InteractionOutlined,
  PhoneOutlined,
  TeamOutlined,
  BellOutlined,
  SettingOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Sidebar = (props) => {
  const location = useLocation();
  return (
    <div>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        // defaultOpenKeys={["sub1"]}
        mode='inline'
        theme='dark'
        onClick={props.onPageChange}
      >
        <Menu.Item key='/' icon={<DashboardOutlined />}>
          <Link to='/'> Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='/clients' icon={<TeamOutlined />}>
          <Link to='/clients'>Clients</Link>
        </Menu.Item>
        <Menu.Item key='/call_logs' icon={<PhoneOutlined />}>
          Call Logs
        </Menu.Item>
        <Menu.Item key='/email' icon={<MailOutlined />}>
          Email
        </Menu.Item>
        <Menu.Item key='/notification' icon={<BellOutlined />}>
          Notification
        </Menu.Item>
        <SubMenu
          key='/activity'
          icon={<InteractionOutlined />}
          title='Activity'
        >
          <Menu.Item key='/calendar'>Calendar</Menu.Item>
        </SubMenu>
        <SubMenu key='/users' icon={<UserOutlined />} title='Users'>
          <Menu.Item key='/list_users'>List Users</Menu.Item>
          <Menu.Item key='/add_user'>Add User</Menu.Item>
        </SubMenu>
        <SubMenu key='/settings' icon={<SettingOutlined />} title='Settings'>
          <Menu.Item key='9'>System Settings</Menu.Item>
          <Menu.Item key='10'>Group Permissions</Menu.Item>
          <Menu.Item key='11'>Promos</Menu.Item>
          <Menu.Item key='12'>Currencies</Menu.Item>
          <Menu.Item key='13'>Backups</Menu.Item>
          <Menu.Item key='14'>Email Templates</Menu.Item>
          <Menu.Item key='15'>Call Templates</Menu.Item>
          <Menu.Item key='16'>Other</Menu.Item>
        </SubMenu>
        <SubMenu key='/reports' icon={<BarChartOutlined />} title='Reports'>
          <Menu.Item key='10'>Overview Chart</Menu.Item>
          <Menu.Item key='11'>Daily Transactions</Menu.Item>
          <Menu.Item key='12'>Register Report</Menu.Item>
          <Menu.Item key='13'>Transfers Report</Menu.Item>
          <Menu.Item key='14'>Payments Report</Menu.Item>
          <Menu.Item key='15'>Deposits Report</Menu.Item>
          <Menu.Item key='16'>Register Report</Menu.Item>
          <Menu.Item key='17'>Clients Report</Menu.Item>
          <Menu.Item key='18'>Loans Report</Menu.Item>
          <Menu.Item key='19'>Account History</Menu.Item>
          <Menu.Item key='20'>Staff Report</Menu.Item>
          <Menu.Item key='21'>Daily Transactions</Menu.Item>
          <Menu.Item key='22'>Monthly Transactions</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
