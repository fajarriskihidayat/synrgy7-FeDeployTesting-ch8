import { Link } from "react-router-dom";
import { Car } from "../../../types/types";

interface FormProps {
  data: Car;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormCar: React.FC<FormProps> = ({ data, handleChange, handleSubmit }) => {
  return (
    <div className="bg-white shadow-sm p-3 mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Nama</label>
          <div className="col-sm-10 w-50">
            <input
              type="text"
              className="form-control lh-lg px-2"
              placeholder="Masukkan nama"
              name="manufacture"
              onChange={handleChange}
              value={data.manufacture}
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Tipe</label>
          <div className="col-sm-10 w-50">
            <input
              type="text"
              className="form-control lh-lg px-2"
              placeholder="Masukkan tipe"
              name="type"
              onChange={handleChange}
              value={data.type}
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Harga</label>
          <div className="col-sm-10 w-50">
            <input
              type="number"
              className="form-control lh-lg px-2"
              placeholder="Masukkan harga"
              name="rentPerDay"
              onChange={handleChange}
              value={data.rentPerDay}
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Size</label>
          <div className="col-sm-10 w-50">
            <select
              className="form-select lh-lg px-2"
              aria-label="Default select example"
              name="size"
              onChange={handleChange}
              value={data.size}
            >
              <option selected>Pilih</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Kapasitas</label>
          <div className="col-sm-10 w-50">
            <input
              type="number"
              className="form-control lh-lg px-2"
              placeholder="Masukkan harga"
              name="capacity"
              onChange={handleChange}
              value={data.capacity}
            />
          </div>
        </div>

        <div className="w-25 d-flex gap-3 mt-5">
          <Link
            to="/admin/cars"
            className="btn bg-transparent border-1 py-2 w-100"
            style={{ borderColor: "#0d28a6", color: "#0d28a6" }}
          >
            <i className="fa-solid fa-trash-can me-1"></i>
            Cancel
          </Link>
          <button
            type="submit"
            className="btn text-white py-2 w-100"
            style={{ backgroundColor: "#0d28a6" }}
          >
            <i className="fa-regular fa-pen-to-square me-1"></i>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCar;
