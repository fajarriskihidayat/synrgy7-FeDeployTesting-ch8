import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "../utils/toast";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.email === "admin@gmail.com" && data.password === "123") {
      toast("Login berhasil", { type: "success", autoClose: 2000 });

      setTimeout(() => {
        localStorage.setItem("auth", "true");
        navigate("/admin/dashboard");
      }, 2500);
      return;
    }

    setIsError(true);
  };

  return (
    <div className="overflow-x-hidden overflow-hidden">
      <div className="row vh-100">
        <div className="col-md-8 d-flex align-items-center">
          <img
            src="/assets/bg.png"
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
            {isError && (
              <div className="mb-4" style={{ backgroundColor: "#D00C1A1A" }}>
                <p className="p-3 text-danger">
                  Masukkan username dan password dengan benar
                </p>
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
