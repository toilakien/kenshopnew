import { Layout, Row, Col, Space, Button, Avatar, Dropdown, Typography } from 'antd';
import { NotificationOutlined, QuestionOutlined } from "@ant-design/icons"
import React, { useState } from 'react'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../../src/logo.png';
const Header = () => {
    const { Header } = Layout;
    const [open, setOpen] = useState<boolean>(false);
    const items = [
        {
            key: '1',
            icon: <SettingOutlined />,
            label: (
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Acount seting
                </a>
            ),
        },
        {
            key: '2',
            icon: <LogoutOutlined />,

            label: (
                <a target="_blank" rel="noopener noreferrer" href="#">
                    Logout
                </a>
            ),
        }

    ];
    return (
        <Header style={{ padding: 0, backgroundColor: "#f5f5f5" }} className="header">
            <Row >
                <Col style={{ display: "flex", justifyContent: "left", position: 'relative', left: "30px" }} span={4}>
                    <Avatar size={70} src={logo} />
                    
                </Col>
                <Col style={{ display: "flex", justifyContent: "left", alignItems: 'center' }} span={8}>
                    <Typography.Title level={3} > Trang chủ</Typography.Title>
                </Col>
                <Col span={12}>
                    <Space style={{ display: "flex", justifyContent: "end" }}>
                        <Button type='link'>
                            <NotificationOutlined />
                        </Button>
                        <Button type='link'>
                            <QuestionOutlined />
                        </Button>

                        <Dropdown
                            onOpenChange={() => setOpen(false)}
                            open={open}
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                        >
                            <Button onClick={() => setOpen(true)} type='link'>
                                <Avatar style={{ marginRight: "10px" }} />KIENLV
                            </Button>

                        </Dropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    )
}

export default Header