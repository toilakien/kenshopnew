import { Col, Row } from "antd";
import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Row
      style={{
        height: "100vh",
        // width:"100vh",
        backgroundImage:
          'url("http://khohinhnen.com/wp-content/uploads/2014/12/hinh-nen-may-tinh-cuc-dep-20.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Col span={24}>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default LoginPage;
