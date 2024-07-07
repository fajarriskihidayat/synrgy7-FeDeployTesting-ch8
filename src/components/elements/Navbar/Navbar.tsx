import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { MENU_ADMIN, MENU_MEMBER } from "../../layouts/constant";

const Navbar = () => {
  const { decoded } = useAuth();
  const [isLogin, setIsLogin] = useState<string | null>("");

  useEffect(() => {
    const storage = localStorage.getItem("auth");
    setIsLogin(storage);
  });

  return (
    <nav
      className="navbar navbar-expand-lg py-2 fixed-top"
      style={{ backgroundColor: "#f1f3ff" }}
    >
      <div className="container">
        <a className="nav-link" href="/#hero">
          {" "}
          <div className="box"></div>
        </a>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end w-50"
          tabIndex={-1}
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="offcanvas-header align-items-center mt-3">
            <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body pt-0">
            <ul className="navbar-nav my-2 my-lg-0 ms-auto align-items-lg-center gap-3 gap-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/#our-services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#faq">
                  FAQ
                </a>
              </li>
              {isLogin ? (
                <div className="">
                  <div className="btn-group d-flex flex-column">
                    <p
                      className="btn dropdown-toggle fs-6 align-items-center d-flex gap-2 mb-0 px-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: "transparent", border: 0 }}
                    >
                      <i className="fa-solid fa-circle text-secondary fs-2"></i>{" "}
                      {decoded.email}
                    </p>
                    <ul className="dropdown-menu">
                      {(decoded.role === "member"
                        ? MENU_MEMBER
                        : MENU_ADMIN
                      ).map((item) => (
                        <Link
                          to={item.path}
                          className="d-flex align-items-center gap-2 py-2 px-4 dropdown-item"
                          key={item.id}
                        >
                          <i
                            className={`fs-5 ${item.icon}`}
                            style={{ color: "#0d28a6" }}
                          ></i>
                          <span className="text-black bg-transparent text-decoration-none fw-semibold">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="btn text-light">
                  Sign In
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
