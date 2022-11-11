import { useRoutes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import MainRoute from "./MainRoute";

const Routers = () => {
  return useRoutes([AuthRoute, MainRoute]);
};

export default Routers;
