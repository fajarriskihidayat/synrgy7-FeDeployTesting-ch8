import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatchAuth } from "../context/AuthContext";
import toast from "../utils/toast";

const CreateAdminPage = () => {
  const navigate = useNavigate();
  const { apiJWT } = useDispatchAuth();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!localStorage.getItem("auth")) {
        return toast("Please Login", { type: "info", autoClose: 1000 });
      }

      await apiJWT.post("/users/admin/register", data);

      toast("Akun Admin berhasil", { type: "success", autoClose: 1000 });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.message === "Permission denied") {
          toast("Anda bukan Super Admin", { type: "warning", autoClose: 1000 });
        } else {
          setMsg(error.response.data.message);
        }
      }
    }
  };

  return (
    <div>
      <div className="row vh-100">
        <div className="col-md-8 d-flex align-items-center">
          <img
            src="/images/bg.png"
            alt="Register Page Image"
            className="mx-auto img-fluid h-100 object-fit-cover"
          />
        </div>
        <div className=" col-md-4 d-flex align-items-center">
          <div className="p-4 w-100">
            <svg
              width="100"
              height="34"
              viewBox="0 0 100 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: "32px" }}
            >
              <rect width="100" height="34" fill="#CFD4ED" />
            </svg>

            <h3 className="text-start fw-bold" style={{ marginBottom: "32px" }}>
              Create Admin Account!
            </h3>
            {msg && (
              <div className="mb-4" style={{ backgroundColor: "#D00C1A1A" }}>
                <p className="p-3 text-danger">{msg}</p>
              </div>
            )}

            <form onSubmit={handleCreateAdmin}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="mb-4 form-control"
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="mb-4 form-control"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="mb-4 form-control"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="text-white btn btn-block w-100"
                style={{ backgroundColor: "#0D28A6" }}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;
