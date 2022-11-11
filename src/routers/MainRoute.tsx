import React from "react";
import BaseLayout from "../layouts/BaseLayout";
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
            path: '/dashbound',
            element: <Dashbound />
        },
        {
            path: '/product',
            element: <ProductPage />
        },
        {
            path: '/category',
            element: <CategoryPage />
        },
    ]
};

export default MainRoute;
