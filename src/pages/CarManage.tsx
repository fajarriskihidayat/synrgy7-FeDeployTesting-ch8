import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import isLocation from "../utils/isLocation";

import FilterType from "../components/elements/FilterType/FIlterType";
import AdminLayout from "../components/layouts/Admin/AdminLayout";
import { Car } from "../types/types";
import api from "../api";

const CarManage = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const getCars = async () => {
    try {
      const { data } = await api.get("/cars");
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars();
  }, [cars]);

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

          <FilterType cars={cars} />
        </>
      ) : (
        <Outlet />
      )}
    </AdminLayout>
  );
};

export default CarManage;
