import { Button, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/Api";
import axiosServices from "../../utils/axios";
import BookList from "./BookList";

const BookPage = () => {
  const [books, setBooks] = useState<any>([]);
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate("/createBook");
  };
  const callApiGetAllBook = async () => {
    const res = await axiosServices.get(API_URL.books.getAllBook);
    setBooks(res.data.books);
  };
  useEffect(() => {
    callApiGetAllBook();
  }, []);
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
        <BookList books={books} />
      </Col>
    </Row>
  );
};

export default BookPage;
