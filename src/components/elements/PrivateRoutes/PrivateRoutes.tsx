import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
