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
            <th>Name</th>
            <th>Rent Per Day</th>
            <th>Size</th>
            <th>Image</th>
            <th>Created By</th>
            <th>Updated By</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{car.name}</td>
              <td>{formatRupiah(car.rentPerDay)}</td>
              <td>{car.size}</td>
              <td>
                <img src={car.img_url} width={200} />
              </td>
              <td>{car.createBy?.email}</td>
              <td>{car.updateBy?.email}</td>
              <td>{formatDate(car.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCar;
