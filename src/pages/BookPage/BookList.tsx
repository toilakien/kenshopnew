import { AudioOutlined } from "@ant-design/icons";
import { Button, Input, Row, Select, Space, Table } from "antd";
import Col from "antd/es/grid/col";
import Typography from "antd/lib/typography/Typography";
import React from "react";
import styles from "./book.module.css";
const BookList = () => {
  const { Option } = Select;
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      description: 32,
      status: true,
      address: "Hà nội",
      createdAt: "20/10/2010",
      updatedAt: "20/10/2023",
    },
    {
      key: "2",
      name: "John",
      description: 42,
      status: false,
      address: "Hà nội",
      createdAt: "20/10/2010",
      updatedAt: "20/10/2023",
    },
    {
      key: "2",
      name: "John",
      description: 42,
      status: true,
      address: "Hà nội",
      createdAt: "20/10/2010",
      updatedAt: "20/10/2023",
    },
  ];

  const columns: any = [
    {
      title: "STT",
      align: "left",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      align: "left",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: any) => {
        return value ? (
          <span className={styles["chip bg-green"]}>True</span>
        ) : (
          <span>False</span>
        );
      },
    },
    {
      title: "Address",
      align: "right",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Created_At",
      align: "right",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated_At",
      align: "right",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Tools",
      align: "center",
      render: () => {
        return (
          <div>
            <Button>delete</Button>&nbsp;
            <Button>delete</Button>
          </div>
        );
      },
    },
  ];
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={6}>
            <Search
              placeholder="Search ..... ?"
              size="middle"
              onSearch={onSearch}
            />
          </Col>
          <Col span={2}></Col>
          <Col span={6}>
            Show:&nbsp;
            <Select size="small" defaultValue="All">
              <Option value="All">All</Option>
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
            </Select>
            <Select size="small">
              <Option value="A-Z">A-Z</Option>
              <Option value="Z-A">Z-A</Option>
            </Select>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Table
          style={{ marginTop: "20px" }}
          bordered
          showHeader
          columns={columns}
          dataSource={dataSource}
        />
      </Col>
    </Row>
  );
};

export default BookList;
