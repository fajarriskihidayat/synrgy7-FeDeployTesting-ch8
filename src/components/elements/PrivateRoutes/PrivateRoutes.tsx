import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("auth");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
