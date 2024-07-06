import { Link, Outlet } from "react-router-dom";
import isLocation from "../utils/isLocation";

import FilterType from "../components/elements/FilterType/FIlterType";
import AdminLayout from "../components/layouts/Layout";

const CarManage = () => {
  return (
    <AdminLayout>
      {isLocation("/admin/cars") ? (
        <>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">List Car</h5>
            <Link
              to="/admin/cars/add"
              className="btn text-white py-1 px-2"
              style={{ backgroundColor: "#0d28a6" }}
            >
              <i className="fa-solid fa-plus me-1"></i>
              Add New Car
            </Link>
          </div>

          <FilterType />
        </>
      ) : (
        <Outlet />
      )}
    </AdminLayout>
  );
};

export default CarManage;
