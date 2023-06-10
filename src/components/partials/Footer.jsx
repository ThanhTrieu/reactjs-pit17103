/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  // return tra ve giao dien cho component
  // thuc te la cac ma jsx chu ko phai html
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Shopping ©2023 Created by PBIT17103
    </Footer>
  );
};
export default React.memo(FooterComponent);
