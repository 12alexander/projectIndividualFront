import React from "react";
import logo from "../../../assets/logo_blanco_mostacho.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Aside() {
  const reservation = useSelector((state) => {
    return state;
  });
  let navigate = useNavigate();

  //const token = reservation.reservation.reservation.token;
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}

      <img
        src={logo}
        alt="AdminLTE Logo"
        className="brand-image elevation-3"
        style={{ opacity: ".8" }}
      />

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <a href="#" className="d-block"></a>
          </div>
        </div>

        {/* Sidebar Menu /dashboard/artist/view */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a className="nav-link">
                <p>
                  Artistas
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    onClick={() => navigate("artist/create")}
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Registrar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => navigate("artist/view")}
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <p>
                  Paquetes
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    onClick={() => navigate("package/create")}
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Registrar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => navigate("package/view")}
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
