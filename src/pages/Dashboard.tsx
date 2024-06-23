import TableCar from "../components/elements/TableCar/TableCar";
import AdminLayout from "../components/layouts/Admin/AdminLayout";
import { useCar } from "../context/CarContext";

const Dashboard = () => {
  const { cars } = useCar();

  return (
    <AdminLayout>
      <h5 className="fw-bold mb-4">Dashboard</h5>

      <TableCar cars={cars} />
    </AdminLayout>
  );
};

export default Dashboard;
