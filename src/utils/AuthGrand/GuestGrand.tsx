import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

export const GuestGrand = ({ children }: { children: any }) => {
  const navigate = useNavigate();
  useAuth();
  const a = localStorage.getItem("serviceToken");

  React.useEffect(() => {
    if (a) {
      navigate("/dashbound");
    }
  }, [a]);
  return children;
};
