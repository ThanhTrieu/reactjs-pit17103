/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {

  let itemMenus = [
    {label: <NavLink to="/"> San Pham </NavLink>, key: "/"},
    {label: "Danh mục sản phẩm", key: "/category"},
    {label: <NavLink to="/cart"> Gio hang</NavLink>, key:"/cart"}
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={itemMenus}
      />
    </Header>
  );
};
export default React.memo(HeaderComponent);
