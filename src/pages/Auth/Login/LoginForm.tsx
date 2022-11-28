// import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { useFormik } from "formik";
import useAuth from "../../../hook/useAuth";
import formstyles from "./form.module.css";
import { notification } from "antd";
import google from "../../../../src/google.png";
const LoginForm = () => {
  const { login } = useAuth();
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 4) {
      errors.username = "Must be 4 characters or less";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
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
        <hr />
        <a
          href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"
          className={formstyles["logingoogle"]}
        >
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <h2>Sign in with Google</h2>
          </div>
        </a>
        <hr />
        <h4 style={{ textAlign: "center", padding: "5px 0" }}>
          Or login with acount and password
        </h4>
        <hr style={{ borderLeft: "none" }} />

        <div className={formstyles["form-item"]}>
          <label>Username:</label>
          <input
            style={{ width: "100%" }}
            id="username"
            name="username"
            type={"text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <span style={{ color: "red" }}>
            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </span>
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
            onBlur={formik.handleBlur}
          />
          <span style={{ color: "red" }}>
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </span>
        </div>
        <div className={formstyles["form-item"]}>
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
