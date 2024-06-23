import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormCar from "../components/elements/FormCar/FormCar";
import { IForm } from "../types/types";
import toast from "../utils/toast";
import { useDispatchAuth } from "../context/AuthContext";
import { useCar } from "../context/CarContext";

const EditCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchCars } = useCar();
  const { apiJWT } = useDispatchAuth();
  const [data, setData] = useState<IForm>({
    name: "",
    rentPerDay: 0,
    size_id: "",
    picture: null,
  });

  const fetchCar = async () => {
    try {
      const { data } = await apiJWT.get(`/cars/${id}`);
      const car = data.data;
      setData({
        ...car,
        size_id: car.car_size.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setData((prev) => ({
      ...prev,
      [target.name]: target.name === "picture" ? target.files[0] : target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!data.name || !data.rentPerDay || !data.size_id) {
      return toast("Data Tidak Boleh Kosong", {
        type: "warning",
        autoClose: 2000,
      });
    }

    try {
      await apiJWT.put(`/cars/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchCars();
      navigate("/admin/cars");
      toast("Data Berhasil Diubah", {
        type: "success",
        autoClose: 1500,
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/admin/cars");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h5 className="fw-bold">Edit Data Car</h5>

      <FormCar
        data={data}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditCar;
