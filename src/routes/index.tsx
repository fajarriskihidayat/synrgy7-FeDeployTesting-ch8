import { Route, Routes } from "react-router-dom";

import CarList from "../pages/CarList";
import ErrorPage from "../pages/ErrorPage";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import PrivateRoutes from "../components/elements/PrivateRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import CarManage from "../pages/CarManage";
import AddCar from "../pages/AddCar";
import EditCar from "../pages/EditCar";
import Register from "../pages/Register";
import CreateAdminPage from "../pages/CreateAdminPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-admin" element={<CreateAdminPage />} />
      <Route path="/admin" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<CarManage />}>
          <Route path="add" element={<AddCar />} />
          <Route path="edit/:id" element={<EditCar />} />
        </Route>
      </Route>
      <Route path="/member" element={<PrivateRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Root;
