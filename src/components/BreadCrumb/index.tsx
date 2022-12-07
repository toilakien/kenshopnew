import { Breadcrumb } from "antd";
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
    <div>
      <Routes>
        <Route path="/" element={<Dashbound />} />
      </Routes>
      <Breadcrumb style={{padding:10}}>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};
const breadcrumbNameMap: Record<string, string> = {
  "/dashbound": "Dashbound",
  "/product": "Sản phẩm",
  "/product/oto": "Ôtô ",
  "/category": "Danh mục",
};
export default Breadcrumbs;
