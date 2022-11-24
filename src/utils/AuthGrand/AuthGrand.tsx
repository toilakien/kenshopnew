import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export const AuthGrand = ({ children }: { children: any }) => {
  const navigate = useNavigate();
  const { isLogined } = useAuth();

  React.useEffect(() => {
    if (!isLogined) {
      navigate("/login");
    }
  });
  return children;
};
