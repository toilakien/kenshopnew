import React from "react";
import {
  Layout,
  Row,
  Col,
  Space,
  Button,
  Avatar,
  Dropdown,
  Typography,
  Tooltip,
} from "antd";
import {
  DownOutlined,
  NotificationOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "../../../src/logo.png";
import useAuth from "../../hook/useAuth";
const Header = () => {
  const { logout } = useAuth();
  const { Header } = Layout;
  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: <a >Acount seting</a>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,

      label: <a onClick={() => logout()}>Logout</a>,
    },
  ];
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <Header
      style={{ padding: 0, backgroundColor: "#f5f5f5" }}
      className="header"
    >
      <Row>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            position: "relative",
            left: "20px",
          }}
          span={4}
        >
          <Avatar
            style={{ border: "1px solid #1890ff" }}
            size={50}
            src={logo}
          />
          <Typography.Text
            style={{
              textTransform: "uppercase",
              fontSize: "1.4rem",
              marginLeft: "10px",
              color: "#1890ff",
            }}
          >
            shopnew
          </Typography.Text>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
          span={8}
        >
          <Typography.Text style={{ fontSize: "1.4rem", color: "#1890ff" }}>
            {" "}
            Trang chủ
          </Typography.Text>
        </Col>
        <Col span={12}>
          <Space style={{ display: "flex", justifyContent: "end" }}>
            <Tooltip title="Question">
              <Button shape="circle" icon={<QuestionOutlined />} />
            </Tooltip>
            <Tooltip title="Notification">
              <Button shape="circle" icon={<NotificationOutlined />} />
            </Tooltip>
            <Dropdown
              trigger={["click"]}
              menu={{
                items,
              }}
              placement="bottomLeft"
              overlayStyle={{}}
            >
              <Button
                style={{ display: "flex", alignItems: "center" }}
                type="link"
              >
                <Avatar
                  size={50}
                  src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg"
                  style={{ marginRight: "10px" }}
                />
                <Typography>
                  <Typography.Title style={{ margin: 0 }} level={5}>
                    {user.username}
                  </Typography.Title>
                  <Typography.Text>{user.username}</Typography.Text>
                </Typography>
                <DownOutlined style={{ color: "black" }} />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default Header;
