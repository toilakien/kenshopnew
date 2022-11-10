import { MenuProps, Menu, Layout } from 'antd';
import React from 'react'

const Header = () => {
    const { Header } = Layout;
    const items1: MenuProps['items'] = ['Trang chủ', 'Sản Phẩm', 'Contact'].map(key => ({
        key,
        label: `${key}`,
    }));
    return (
        <Header style={{ padding: 0 }} className="header">
            <Menu  theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    )
}

export default Header