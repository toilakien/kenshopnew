import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import BookList from "./BookList";

const BookPage = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createBook");
  };
  return (
    <Row>
      <Col
        span={24}
        style={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            padding: "10px 0",
            position: "relative",
            left: 20,
            fontSize: "1.4rem ",
            fontWeight: 600,
          }}
        >
          Books
        </Typography>
      </Col>
      <Col span={24}>
        <Button onClick={handleCreate}>Create</Button>
      </Col>
      <Col style={{ marginTop: 10 }} span={24}>
        <BookList />
      </Col>
    </Row>
  );
};

export default BookPage;
