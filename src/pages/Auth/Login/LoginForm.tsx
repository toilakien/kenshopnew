// import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { useFormik } from "formik";
import useAuth from "../../../hook/useAuth";
import formstyles from "./form.module.css";
import { notification } from "antd";
const LoginForm = () => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values.username, values.password).then(
        notification.success({ message: "Login successfully !" })
      );
    },
  });

  return (
    <div className={formstyles["login-wrapper"]}>
      <div className={formstyles["login-title"]}>
        <h1>Đăng nhập</h1>
      </div>
      <form
        className={formstyles["form-wrapper"]}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div className={formstyles["form-item"]}>
          <label>Username:</label>
          <input
            style={{ width: "100%" }}
            id="username"
            name="username"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div className={formstyles["form-item"]}>
          <label>Password:</label>
          <input
            style={{ width: "100%" }}
            id="password"
            name="password"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className={formstyles["form-item"]}>
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
