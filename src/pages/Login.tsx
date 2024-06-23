import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "../utils/toast";
import { ToastContainer } from "react-toastify";
import api from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState<string>("");

  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await api.post("/users/login", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("token", res.data.accessToken);
      toast("Login berhasil", { type: "success", autoClose: 1000 });
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

  return (
    <div className="overflow-x-hidden overflow-hidden">
      <div className="row vh-100">
        <div className="col-md-8 d-flex align-items-center">
          <img
            src="/images/bg.png"
            alt="Login Page Image"
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
              Welcome, Admin BCR
            </h3>
            {msg && (
              <div className="mb-4" style={{ backgroundColor: "#D00C1A1A" }}>
                <p className="p-3 text-danger">{msg}</p>
              </div>
            )}

            <form onSubmit={handleLogin}>
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
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
