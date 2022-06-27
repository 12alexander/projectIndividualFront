import React from "react";
import logo from "../../../assets/logo_blanco_mostacho.png";
import { useNavigate } from "react-router-dom";

export default function Aside() {
  let navigate = useNavigate();

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <img
        src={logo}
        alt="AdminLTE Logo"
        className="brand-image elevation-3"
        style={{ opacity: ".8" }}
      />
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <a href="#" className="d-block"></a>
          </div>
        </div>

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
      </div>
    </aside>
  );
}
