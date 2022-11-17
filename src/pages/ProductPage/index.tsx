import { Col, Row, Typography } from 'antd'
import React from 'react'
import ProductList from './ProductList'

const ProductPage = () => {
    return (
        <Row>
            <Col span={24} style={{ backgroundColor: "#f5f5f5" }}>
                <Typography>
                    <Typography.Title>Product</Typography.Title>
                </Typography>
            </Col>
            <Col span={24}>
                <ProductList/>
            </Col>
        </Row>
    )
}

export default ProductPage