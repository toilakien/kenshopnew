import { Layout, Menu, MenuProps } from 'antd';
import React from 'react'
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
    CarOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom';
import Dashbound from '../../pages/Dashbound';
const SideBar = () => {
    const basenav = [
        {
            icon: UserOutlined,
            label: "Sản phẩm",
            children: [
                {
                    icon: <Link to="/product"><CarOutlined /></Link>,
                    label: "Ô tô",
                },
                {

                    icon: <Link to="/category"> < LaptopOutlined /></Link>,
                    label: "Xe máy",

                },
                {
                    icon: <Link to=""></Link>,
                    label: "Xe Điện",
                },
            ]
        },
        {
            icon: LaptopOutlined,
            label: "Laptop",
            children: [
                {
                    icon: <Link to="">

                    </Link>,
                    label: "Az",
                },
                {
                    icon: <Link to=""></Link>,
                    label: "770",
                },
                {
                    icon: <Link to=""></Link>,
                    label: "991",
                },
            ]
        },
        {
            icon: NotificationOutlined,
            label: "Quần áo",
            children: [
                {
                    icon: <Link to=""></Link>,
                    label: "Áo khoác",

                },
                {
                    icon: <Link to=""></Link>,
                    uri: '/product',

                },
                {
                    icon: <Link to=""></Link>,
                    label: "Áo kk",


                },
            ]
        },
    ]
    const navigate = useNavigate();
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
                    label: chi.label,
                    icon: chi.icon
                };
            })
        };
    });

    return (
        <Sider width={200} style={{ background: "#fff" }}>
            <Menu

                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                items={items2}
            />
        </Sider>
    )
}

export default SideBar