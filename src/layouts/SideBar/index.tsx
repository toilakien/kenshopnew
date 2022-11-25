import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import {
  LaptopOutlined,
  UserOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const SideBar = () => {
  const basenav = [
    {
      icon: UserOutlined,
      label: "Dashbound",
      children: [
        {
          icon: (
            <Link to="/dashbound">
              <CarOutlined />
            </Link>
          ),
          label: "Dashbound",
        },
      ],
    },
    {
      icon: UserOutlined,
      label: "Sản phẩm",
      children: [
        {
          icon: (
            <Link to="/product">
              <CarOutlined />
            </Link>
          ),
          label: "Ô tô",
        },
        {
          icon: (
            <Link to="/category">
              {" "}
              <LaptopOutlined />
            </Link>
          ),
          label: "Xe máy",
        },
        {
          icon: <Link to=""></Link>,
          label: "Xe Điện",
        },
      ],
    },
    {
      icon: LaptopOutlined,
      label: "Danh mục",
      children: [
        {
          icon: <Link to="/category"></Link>,
          label: "New",
        },
        {
          icon: <Link to=""></Link>,
          label: "770",
        },
        {
          icon: <Link to=""></Link>,
          label: "991",
        },
      ],
    },
  ];
  const { Sider } = Layout;
  const items2: MenuProps["items"] = basenav.map((base, index) => {
    const key = String(index + 1);

    return {
      key: key,
      icon: React.createElement(base.icon),
      label: base.label,

      children: base.children.map((element, index) => {
        return {
          key: index,
          label: element.label,
          icon: element.icon,
        };
      }),
    };
  });

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default SideBar;
