import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("expiryAuth");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
