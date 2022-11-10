import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import { AuthGrand } from "../utils/AuthGrand/AuthGrand";

const MainRoute = {
    path: "/",
    element: (
        <AuthGrand>
            <BaseLayout />
        </AuthGrand>
    ),
    children: [

    ]
};

export default MainRoute;
