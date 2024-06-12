import { useState } from "react";
import FormCar from "../components/elements/FormCar/FormCar";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Car } from "../types/types";

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
      !data.capacity
    ) {
      return alert("Data tidak boleh kosong");
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
        image: "/assets/car19.min.jpg",
        updatedAt: new Date(),
      });

      alert("Data mobil berhasil ditambahkan");
      navigate("/admin/cars");
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
