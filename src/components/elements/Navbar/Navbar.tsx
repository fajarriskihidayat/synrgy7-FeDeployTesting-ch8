import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

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
              {token ? (
                <div className="d-flex ">
                  <div className="btn-group">
                    <p
                      className="btn dropdown-toggle fs-6 align-items-center d-flex gap-2 mb-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: "transparent", border: 0 }}
                    >
                      <i className="fa-solid fa-circle text-secondary fs-2"></i>{" "}
                      admin@gmail.com
                    </p>
                    <ul className="dropdown-menu">
                      <li className="d-flex align-items-center gap-2 py-2 px-4 dropdown-item">
                        <i
                          className={"fas fa-sharp fa-house fs-5"}
                          style={{ color: "#0d28a6" }}
                        ></i>
                        <Link
                          to="/admin/dashboard"
                          className="text-black bg-transparent text-decoration-none fw-semibold"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li className="d-flex align-items-center gap-2 py-2 px-4 dropdown-item">
                        <i
                          className={"fas fa-car-side fs-5"}
                          style={{ color: "#0d28a6" }}
                        ></i>
                        <Link
                          to="/admin/cars"
                          className="text-black bg-transparent text-decoration-none fw-semibold"
                        >
                          Cars
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="btn text-light">
                  Register
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
