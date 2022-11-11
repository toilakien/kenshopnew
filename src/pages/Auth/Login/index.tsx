import { Col, Form, Row, Typography } from 'antd'
import React from 'react'
import LoginForm from './LoginForm'

const LoginPage = () => {
    return (
        <Row style={{ height: "100vh", backgroundImage: 'url("http://khohinhnen.com/wp-content/uploads/2014/12/hinh-nen-may-tinh-cuc-dep-20.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "100%", }} >
            <Col span={24}>
                <div style={{ width: "30%", padding: "20px", margin: "0 auto", position: "relative", top: "20%", backgroundColor: "#f5f5f5" }}>
                    <Typography style={{ textAlign: "center", marginBottom: "30px" }}>
                        <Typography.Text style={{ color: "#1890ff", fontSize: "1.8rem", textAlign: "center" }}>Đăng Nhập</Typography.Text>
                    </Typography>
                    <Form
                        style={{ margin: 0, padding: 0 }}
                        name="basic"

                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <LoginForm />
                    </Form>
                </div>

            </Col>
        </Row>
    )
}

export default LoginPage