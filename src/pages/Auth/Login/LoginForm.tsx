import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { useFormik } from "formik";
import useAuth from "../../../hook/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values.username, values.password);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div>
        <label>Username:</label>
        <br />
        <input
          style={{ width: "100%" }}
          id="username"
          name="username"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <label>Password:</label>
        <br />
        <input
          style={{ width: "100%" }}
          id="password"
          name="password"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <br />

      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default LoginForm;
