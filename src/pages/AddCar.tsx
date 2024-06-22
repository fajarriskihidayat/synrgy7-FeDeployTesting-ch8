import { useState } from "react";
import FormCar from "../components/elements/FormCar/FormCar";
import { useNavigate } from "react-router-dom";
import { IForm } from "../types/types";
import toast from "../utils/toast";
import { useDispatchAuth } from "../context/AuthContext";

const AddCar = () => {
  const navigate = useNavigate();
  const { apiJWT } = useDispatchAuth();
  const [data, setData] = useState<IForm>({
    name: "",
    rentPerDay: 0,
    size_id: "",
    picture: null,
  });

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

    if (!data.name || !data.rentPerDay || !data.size_id || !data.picture) {
      return toast("Data Tidak Boleh Kosong", {
        type: "warning",
        autoClose: 2000,
      });
    }

    try {
      await apiJWT.post("/cars", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
