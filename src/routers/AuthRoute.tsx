import React from "react";
import LoginPage from "../pages/Auth/Login";
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
