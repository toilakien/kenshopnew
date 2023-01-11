import {
  Button,
  Checkbox,
  Form,
  Input,
  notification,
  Row,
  Select,
  Typography,
} from "antd";
import { Option } from "antd/lib/mentions";
import { useFormik } from "formik";
import { readFile } from "fs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/Api";
import axiosServices from "../../utils/axios";

const CreateBook = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<any>(null);
  const [statusForm, setStatusForm] = useState<any>(null);
  const handleChangeFile = (e: any) => {
    console.log(e.target.files[0]);

    setImage(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      basic_name: "",
      basic_decription: "",
      basic_status: "",
      basic_sellNumber: "",
      basic_price: "",
      basic_author: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      const a = statusForm == 1 ? "true" : "false";
      formData.append("name", values.basic_name);
      formData.append("decription", values.basic_decription);
      formData.append("status", a);
      formData.append("sellNumber", values.basic_sellNumber);
      formData.append("price", values.basic_price);
      formData.append("author", values.basic_author);
      formData.append("image", image);
      const response = await axiosServices.post(
        API_URL.books.createBook,
        formData
      );
      const { message } = response.data;
      notification.success({ message: message });
      navigate("/books");
    },
  });
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={formik.handleSubmit}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Typography.Title>Create Book</Typography.Title>
      </Form.Item>
      <Form.Item label="Name" name="name">
        <Input onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Decription" name="decription">
        <Input onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Select
          onChange={(e) => {
            setStatusForm(e);
          }}
        >
          <Option value="1">True</Option>
          <Option value="0">False</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sell Number" name="sellNumber">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Athor" name="author">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <input onChange={(e) => handleChangeFile(e)} type={"file"} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateBook;
