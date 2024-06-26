import TableCar from "../components/elements/TableCar/TableCar";
import AdminLayout from "../components/layouts/Admin/AdminLayout";
import { useCar } from "../context/CarContext";

const Dashboard = () => {
  const { cars } = useCar();

  return (
    <AdminLayout>
      <h5 className="fw-bold mb-4">Dashboard</h5>

      {cars.length === 0 ? (
        <div style={{ backgroundColor: "#FCFFCC" }}>
          <p className="p-3 m-0 text-warning text-center fw-semibold">
            Data mobil masih kosong
          </p>
        </div>
      ) : (
        <TableCar cars={cars} />
      )}
    </AdminLayout>
  );
};

export default Dashboard;
