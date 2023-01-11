import { Button, Input, Row, Select, Space, Table } from "antd";
import Col from "antd/es/grid/col";
import React from "react";
import styles from "./book.module.css";
const BookList = ({ books }: any) => {
  const { Option } = Select;

  console.log(books);

  const columns: any = [
    {
      title: "STT",
      align: "left",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      align: "left",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      align: "right",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: any) => {
        return value ? (
          <span className={styles["chip bg-green"]}>True</span>
        ) : (
          <span className={styles["chip bg-green"]}>False</span>
        );
      },
    },
    {
      title: "Sell Number",
      align: "right",
      dataIndex: "sellNumber",
      key: "sellNumber",
    },
    {
      title: "Author",
      align: "right",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Price",
      align: "right",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      align: "right",
      dataIndex: "image",
      key: "image",
      render: (value: any) => {
        return (
          <img
            width="100px"
            src={`${process.env.REACT_APP_IMAGE_URL}/${value}`}
          />
        );
      },
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
            <Button>Delete</Button>&nbsp;
            <Button>Edit</Button>
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
          dataSource={books}
        />
      </Col>
    </Row>
  );
};

export default BookList;
