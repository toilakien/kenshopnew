import { useContext } from "react";
import JWTContext from "../context/JWTContext";

const useAuth = () => {
  const context = useContext(JWTContext);

  if (!context) throw new Error("context must be use inside provider");

  return context;
};

export default useAuth;
