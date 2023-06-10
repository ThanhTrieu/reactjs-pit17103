/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutComponent from "../../components/Layout";
import { Row, Col } from "antd";

const Index = () => {
    return (
        <LayoutComponent
            level_1="Cart"
            level_2="Product"
            level_3="Lists"
        >
            <Row>
                <Col span={24}>
                    <h2> This is cart page</h2>
                </Col>
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(Index)