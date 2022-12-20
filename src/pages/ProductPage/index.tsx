import { Col, Row, Typography } from "antd";
import React from "react";
import ProductList from "./ProductList";

const ProductPage = () => {
  return (
    <Row>
      <Col
        span={24}
        style={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            padding: "10px 0",
            position: "relative",
            left: 20,
            fontSize: "1.4rem ",
            fontWeight: 600,
          }}
        >
          Product
        </Typography>
      </Col>
      <Col style={{ marginTop: 10 }} span={24}>
        <ProductList />
      </Col>
    </Row>
  );
};

export default ProductPage;
