import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import AcountSetting from "../pages/AcountSetting";
import CategoryPage from "../pages/CategoryPage";
import Dashbound from "../pages/Dashbound";
import ProductPage from "../pages/ProductPage";
import { AuthGrand } from "../utils/AuthGrand/AuthGrand";

const MainRoute = {
  path: "/",
  element: (
    <AuthGrand>
      <BaseLayout />
    </AuthGrand>
  ),
  children: [
    {
      path: "/dashbound",
      element: <Dashbound />,
    },
    {
      path: "/product",
      element: <ProductPage />,
      children: [
        {
          path: "/product/oto",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/category",
      element: <CategoryPage />,
    },
    {
      path: "/acountsetting",
      element: <AcountSetting />,
    },
  ],
};

export default MainRoute;
