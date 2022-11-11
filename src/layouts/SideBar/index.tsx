import { Layout, Menu, MenuProps } from 'antd';
import React from 'react'
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined
} from "@ant-design/icons";
const SideBar = () => {
    const basenav = [
        {
            icon: UserOutlined,
            label: "Sản phẩm",
            children: [
                {
                    subkey: "",
                    label: "Ô tô"
                },
                {
                    subkey: "",
                    label: "Xe máy"
                },
                {
                    subkey: "",
                    label: "Xe Điện"
                },
            ]
        },
        {
            icon: LaptopOutlined,
            label: "Laptop",
            children: [
                {
                    subkey: "",
                    label: "Az"
                },
                {
                    subkey: "",
                    label: "770"
                },
                {
                    subkey: "",
                    label: "991"
                },
            ]
        },
        {
            icon: NotificationOutlined,
            label: "Quần áo",
            children: [
                {
                    subkey: "",
                    label: "Áo khoác"
                },
                {
                    subkey: "",
                    label: "Áo sơ mi"
                },
                {
                    subkey: "",
                    label: "Áo kk"
                },
            ]
        },
    ]
    const { Sider } = Layout;
    const items2: MenuProps["items"] = basenav.map((base, index) => {
        const key = String(index + 1);

        return {
            key: key,
            icon: React.createElement(base.icon),
            label: base.label,

            children: base.children.map((chi, index) => {
                return {
                    key: index,
                    label: chi.label
                };
            })
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
    )
}

export default SideBar