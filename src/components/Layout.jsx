/* eslint-disable react-refresh/only-export-components */
import React from "react";
import HeaderComponent from "./partials/Header";
import FooterComponent from "./partials/Footer";
import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

const LayoutComponent = (props) => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>{props.level_1}</Breadcrumb.Item>
          <Breadcrumb.Item>{props.level_2}</Breadcrumb.Item>
          <Breadcrumb.Item>{props.level_3}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: '#ffffff',
            minHeight: '100vh',
            padding: '5px'
          }}
        >
          {props.children}
        </div>
      </Content>
      <FooterComponent/>
    </Layout>
  );
};
export default React.memo(LayoutComponent);
