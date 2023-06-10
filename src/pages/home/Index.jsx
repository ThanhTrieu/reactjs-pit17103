/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutComponent from "../../components/Layout";
import { Row, Col } from "antd";

const Index = () => {
    return (
        <LayoutComponent
            level_1="Home"
            level_2="Product"
            level_3="Lists"
        >
            <Row>
                <Col span={24}>
                    <h2> This is home page</h2>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(Index)