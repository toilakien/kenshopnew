import { MenuProps, Menu, Layout } from 'antd';
import React from 'react'
import "antd/dist/antd.css";
const Header = () => {
    const { Header } = Layout;
    const items1: MenuProps['items'] = ['Trang chủ', 'Sản Phẩm', 'Contact'].map(key => ({
        key,
        label: `${key}`,
    }));
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    )
}

export default Header