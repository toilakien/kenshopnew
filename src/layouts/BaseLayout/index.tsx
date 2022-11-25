import React from 'react'
import Header from '../Header'
import { Layout } from 'antd'
import SideBar from '../SideBar'
import { Outlet } from "react-router-dom";
import BreadCrumb from '../../components/BreadCrumb';
const BaseLayout = () => {
    const { Content } = Layout;
    return (
        <Layout>
            <Header />
            <Layout>
                <SideBar />
                <Layout style={{ padding: "0 24px 24px" }}>
                    <BreadCrumb />
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