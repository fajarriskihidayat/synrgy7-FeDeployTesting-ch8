import { useEffect, useState } from "react";

import TableCar from "../components/elements/TableCar/TableCar";
import AdminLayout from "../components/layouts/Admin/AdminLayout";
import { Car } from "../types/types";
import api from "../api/api";

const Dashboard = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const fetchCars = async () => {
    try {
      const { data } = await api.get(`/cars`);
      setCars(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <AdminLayout>
      <h5 className="fw-bold mb-4" onClick={fetchCars}>
        Dashboard
      </h5>

      <TableCar cars={cars} />
    </AdminLayout>
  );
};

export default Dashboard;
