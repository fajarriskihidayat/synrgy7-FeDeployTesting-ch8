import { ReactNode, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import MENU from "./constant";
import api from "../../../api/api";

type IAdminProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: IAdminProps) => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(true);

  const logout = async () => {
    try {
      await api.delete("/users/logout");

      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.customSidebar}>
      <main className={show ? styles.spaceToggle : ""}>
        <header
          className={`shadow-sm ${styles.header} ${
            show ? styles.spaceToggle : ""
          }`}
        >
          <div className={styles.headerToggle} onClick={() => setShow(!show)}>
            <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : ""}`}></i>
          </div>

          <div className="d-flex">
            <div className="btn-group">
              <p
                className="btn dropdown-toggle fs-6 align-items-center d-flex gap-2"
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
                    className={`fas fa-sign-out ${styles.navLinkIcon} text-secondary`}
                  ></i>
                  <button
                    className="text-black bg-transparent border-0"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <aside className={`${styles.sidebar} ${show ? styles.show : ""}`}>
          <nav className={styles.nav}>
            <div>
              <Link to="/" className={styles.navLogo}>
                <i
                  className={`fa-sharp fa-solid fa-square fs-2 ${styles.navLogoIcon}`}
                  style={{ zIndex: 4 }}
                ></i>
                <span className={styles.navLogoName}>
                  <svg
                    width="100"
                    height="34"
                    viewBox="0 0 100 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="34" fill="#CFD4ED" />
                  </svg>
                </span>
              </Link>

              <div className={styles.navList}>
                <div className={styles.icon}></div>
                {MENU.map((item) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.navLink} ${styles.active}`
                        : `${styles.navLink}`
                    }
                    key={item.id}
                  >
                    <i
                      className={`fs-5 ${item.icon} ${styles.navLinkIcon}`}
                    ></i>
                    <span
                      className={`text-dark fw-semibold ${styles.navLinkName}`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
