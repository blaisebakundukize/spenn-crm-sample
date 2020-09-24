import React, { useState } from "react";
import { Layout as Container, PageHeader } from "antd";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidebar from "../Navigation/Sidebar/Sidebar";

const { Sider, Content, Footer } = Container;

const Layout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState("dashboard");
  const [pageSubTitle, setPageSubTitle] = useState("");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onPageChange = ({ keyPath: titles }) => {
    let title = titles[0] === "/" ? "dashboard" : titles[0];
    let subTitle = titles[1] || "";

    title = title.replace("/", "").replace("_", " ");

    if (subTitle) {
      subTitle = subTitle.replace("/", "").replace("_", "");
      [title, subTitle] = [subTitle, title];
    }

    setPageTitle(title);
    setPageSubTitle(subTitle);
  };

  return (
    <Container className='site-layout'>
      <Toolbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      <Container>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Sidebar onPageChange={onPageChange} />
        </Sider>
        <Container>
          <PageHeader
            className='page-header'
            backIcon={false}
            onBack={() => null}
            title={pageTitle}
            subTitle={pageSubTitle}
          />
          <Content className='content-layout'>{props.children}</Content>
          <Footer className='footer-layout'>
            ©{new Date().getFullYear()} Spenn CRM Sample
          </Footer>
        </Container>
      </Container>
    </Container>
  );
};
export default Layout;
