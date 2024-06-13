import { CarsProps } from "../../../types/types";
import formatDate from "../../../utils/formatDate";
import formatRupiah from "../../../utils/formatRupiah";

const TableCar = ({ cars }: CarsProps) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Manufacture</th>
            <th>Type</th>
            <th>Rent Per Day</th>
            <th>Size</th>
            <th>Capacity</th>
            <th>Updated By</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{car.manufacture}</td>
              <td>{car.type}</td>
              <td>{formatRupiah(car.rentPerDay)}</td>
              <td>{car.size}</td>
              <td>{car.capacity}</td>
              <td>{formatDate(car.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCar;
