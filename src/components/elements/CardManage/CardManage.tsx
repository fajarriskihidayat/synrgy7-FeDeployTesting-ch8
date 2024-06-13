import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarProps } from "../../../types/types";
import api from "../../../api";
import formatDate from "../../../utils/formatDate";
import formatRupiah from "../../../utils/formatRupiah";
import toast from "../../../utils/toast";

const CardManage = ({ car }: CarProps) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState<string | undefined>(undefined);

  const handleDelete = async () => {
    try {
      await api.delete(`/cars/${id}`);

      setIsShow(false);
      navigate("/admin/cars");
      toast("Data Berhasil Dihapus", {
        type: "success",
        autoClose: 2000,
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card" style={{ width: "21.5rem" }}>
        <img
          src={`${car.image}`}
          className="card-img-top"
          alt="car"
          style={{ objectFit: "fill", width: "100%", height: "200px" }}
        />
        <div className="card-body p-3 d-flex gap-2 flex-column">
          <h6>
            {car.manufacture} / {car.type}
          </h6>
          <h5 className="fw-bold fs-6">
            {formatRupiah(car.rentPerDay)} / hari
          </h5>
          <p style={{ fontSize: "14px" }}>
            <i className="fa-solid fa-key text-secondary me-2"></i>
            Start rent - Finish rent
          </p>
          <p style={{ fontSize: "14px" }}>
            <i className="fa-regular fa-clock text-secondary me-2"></i>
            Updated at {formatDate(car.updatedAt)}
          </p>
          <div className="d-flex justify-content-between gap-2 mt-2">
            <button
              type="button"
              className="btn bg-transparent text-danger border-1 border-danger py-2 w-100"
              onClick={() => {
                setId(car.id);
                setIsShow(true);
              }}
            >
              <i className="fa-solid fa-trash-can me-1"></i>
              Delete
            </button>
            <Link
              to={`/admin/cars/edit/${car.id}`}
              className="btn text-white py-2 w-100"
            >
              <i className="fa-regular fa-pen-to-square me-1"></i>
              Edit
            </Link>
          </div>
        </div>
      </div>

      {isShow && (
        <div
          className="modal fade show"
          tabIndex={-1}
          style={{ display: "block" }}
        >
          <div className="modal-dialog m-auto" style={{ top: 140 }}>
            <div className="modal-content">
              <div className="mt-5 text-center">
                <img src="/assets/icon-delete.png" alt="icon delete" />
              </div>
              <div className="text-center">
                <h6 className="fw-bold my-3">Menghapus Data Mobil</h6>
                <p className="mx-5 fs-6">
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin menghapus?
                </p>
              </div>
              <div className="d-flex m-4 gap-3">
                <button
                  className="btn text-white py-2 w-100"
                  style={{ backgroundColor: "#0d28a6" }}
                  onClick={handleDelete}
                >
                  Ya
                </button>
                <button
                  className="btn bg-transparent border-1 py-2 w-100"
                  style={{ borderColor: "#0d28a6", color: "#0d28a6" }}
                  onClick={() => setIsShow(false)}
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardManage;
