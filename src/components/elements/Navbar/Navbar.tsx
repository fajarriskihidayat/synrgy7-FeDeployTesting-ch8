import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to="/login" className="btn text-light">
                Register
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
