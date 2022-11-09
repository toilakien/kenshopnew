import React from 'react'
import Header from '../Header'
import { Breadcrumb, Layout } from 'antd'
import SideBar from '../SideBar'
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
    const { Content } = Layout;
    return (
        <Layout>
            <Header />
            <Layout>
                <SideBar />
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content

                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: "#fff"
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}


export default BaseLayout