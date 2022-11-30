import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export const AuthGrand = ({ children }: { children: any }) => {
  const navigate = useNavigate();
  useAuth();
  const a = localStorage.getItem("serviceToken");
  React.useEffect(() => {
    if (!a) {
      navigate("/login");
    }
  }, [a]);
  return children;
};
