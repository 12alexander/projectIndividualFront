import React from "react";
import IMG from "../../assets/logo_negro_mostacho.png";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../store/slices/reservation";

const ComponentNavbar = () => {
  const reservation = useSelector((state) => {
    return state;
  });

  const type = reservation.reservation.reservation.type;
  const label = type === "admin" ? "Paquete" : "Reservación";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={IMG} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate(
                  type === "admin" ? "/package/create" : "/package/view"
                );
              }}
            >
              {label}
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate(type === "admin" ? "/artist/create" : "/artist/view");
              }}
            >
              Artistas
            </Nav.Link>

            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login");
                }}
                id="test-login"
              >
                Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/register");
                }}
              >
                Registrar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/");
                  dispatch(deleteToken({}));
                }}
              >
                Salir
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ComponentNavbar;
