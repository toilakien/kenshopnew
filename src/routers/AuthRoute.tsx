import React from "react";
import LoginPage from "../pages/Auth/Login";
import { AuthGrand } from "../utils/AuthGrand/AuthGrand";
import { GuestGrand } from "../utils/AuthGrand/GuestGrand";

const AuthRoute = {
  path: "/",
  element: (
    <GuestGrand>
      <LoginPage />
    </GuestGrand>
  ),
  children: [
    { path: '/login', element: <LoginPage /> }
  ],
};

export default AuthRoute;
