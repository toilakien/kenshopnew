import React from "react";
import styles from "./header.module.css";
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
  UserOutlined,
} from "@ant-design/icons";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "../../../src/logo.png";
import useAuth from "../../hook/useAuth";
const Header = () => {
  const { logout } = useAuth();
  const { Header } = Layout;
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const DropdownRender = () => {
    return (
      <div className={styles["wrapperDropdown"]}>
        <a
          style={{
            fontWeight: 600,
            border: "1px solid #f8f8f8",
            borderRadius: "10px",
            zIndex: 1,
            backgroundColor: "#f8f8f8",
          }}
          className={styles["wrapperDropdownItem"]}
        >
          <Avatar src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg" />
          <span>{user.username}</span>
        </a>
        <a href="/acountsetting" className={styles["wrapperDropdownItem"]}>
          <>
            <SettingOutlined />
          </>
          <span className={styles["text"]}>Acount seting</span>
        </a>
        <a onClick={() => logout()} className={styles["wrapperDropdownItem"]}>
          <>
            <LogoutOutlined />
          </>
          <span className={styles["text"]}>Logout</span>
        </a>
      </div>
    );
  };

  return (
    <Header
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        boxShadow: "2px 2px 0 0 #ddd",
      }}
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
          span={12}
        >
          <Avatar
            style={{ border: "1px solid #1890ff" }}
            size={30}
            src={logo}
          />
          <Typography.Text
            strong
            style={{ textTransform: "uppercase", marginLeft: "10px" }}
          >
            Webside quản trị chuyên nghiệp
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
              dropdownRender={DropdownRender}
              placement="bottomLeft"
              overlayStyle={{}}
            >
              <Button
                style={{ display: "flex", alignItems: "center" }}
                type="link"
              >
                <Avatar
                  size={40}
                  src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg"
                />

                <DownOutlined
                  style={{
                    height: "15px",
                    padding: 2,
                    background: "#fff",
                    color: "black",
                    border: "1px solid #111",
                    borderRadius: "100%",
                    position: "relative",
                    right: "20px",
                    top: "15px",
                  }}
                />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default Header;
