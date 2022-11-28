import { Alert, Breadcrumb } from "antd";
import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Dashbound from "../../pages/Dashbound";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="demo">
      <Routes>
        <Route path="/" element={<Dashbound />} />
      </Routes>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};
const breadcrumbNameMap: Record<string, string> = {
  "/dashbound": "dashbound",
  "/product": "product",
  "/product/oto": "oto",
  "/category": "category",
};
export default Breadcrumbs;
