import { useState } from "react";
import FormCar from "../components/elements/FormCar/FormCar";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Car } from "../types/types";
import toast from "../utils/toast";

const AddCar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Car>({
    id: "",
    manufacture: "",
    type: "",
    rentPerDay: 0,
    size: "",
    capacity: 0,
    available: false,
    transmission: "",
    year: 0,
    image: "",
    updatedAt: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !data.manufacture ||
      !data.type ||
      !data.rentPerDay ||
      !data.size ||
      !data.capacity ||
      !data.image
    ) {
      return toast("Data Tidak Boleh Kosong", {
        type: "warning",
        autoClose: 2000,
      });
    }

    try {
      await api.post("/cars", {
        manufacture: data.manufacture,
        type: data.type,
        rentPerDay: data.rentPerDay,
        size: data.size,
        capacity: data.capacity,
        available: true,
        transmission: "Automanual",
        year: 2021,
        image: data.image,
        updatedAt: new Date(),
      });

      navigate("/admin/cars");
      toast("Data Berhasil Disimpan", {
        type: "success",
        autoClose: 2000,
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h5 className="fw-bold">Add New car</h5>

      <FormCar
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddCar;
