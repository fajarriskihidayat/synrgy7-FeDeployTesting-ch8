import { Link } from "react-router-dom";
import { IForm } from "../../../types/types";

interface FormProps {
  data: IForm;
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
              name="name"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <label className="col-sm-2 col-form-label">Harga</label>
          <div className="col-sm-10 w-50">
            <input
              type="text"
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
              name="size_id"
              onChange={handleChange}
              value={data.size_id}
            >
              <option selected>Pilih</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 align-items-start">
          <label className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-10 w-50">
            <input
              type="file"
              className="form-control lh-lg px-2 mb-1"
              placeholder="Masukkan harga"
              name="picture"
              accept="image/png, image/jpg, image/jpeg"
              onChange={handleChange}
            />
            <img src={data?.img_url} width={150} />
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
