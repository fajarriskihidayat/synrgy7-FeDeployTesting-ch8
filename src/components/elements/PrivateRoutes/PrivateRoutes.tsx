import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("auth");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
