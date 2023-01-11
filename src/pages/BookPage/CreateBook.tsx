import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import { useFormik } from "formik";
import { readFile } from "fs";
import React, { useState } from "react";
import API_URL from "../../utils/Api";
import axiosServices from "../../utils/axios";

const CreateBook = () => {
  const [image, setImage] = useState<any>(null);
  const handleChangeFile = (e: any) => {
    console.log(e.target.files[0]);

    setImage(e.target.files);
  };

  const formik = useFormik({
    initialValues: {
      basic_name: "",
      basic_decription: "",
      basic_status: "",
      basic_sellNumber: "",
      basic_price: "",
      basic_athor: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("basic_name", values.basic_name);
      formData.append("basic_decription", values.basic_decription);
      formData.append("basic_status", values.basic_status);
      formData.append("basic_sellNumber", values.basic_sellNumber);
      formData.append("basic_price", values.basic_price);
      formData.append("basic_athor", values.basic_athor);
      formData.append("image", image);
      await axiosServices.post(API_URL.books.createBook, formData);
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

      <Form.Item label="Decription" name="de  cription">
        <Input onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Sell Number" name="sellNumber">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Athor" name="athor">
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
