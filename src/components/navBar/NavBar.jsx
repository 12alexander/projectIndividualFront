import React from "react";
//import "./packages.css";
import "./NavBar.css";
import IMG from "../../assets/logo_negro_mostacho.png";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap/";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../store/slices/reservation";

const ComponentNavbar = () => {
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
                navigate("/package/view");
              }}
            >
              Reservar
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/artist/view");
              }}
            >
              Artistas
            </Nav.Link>

            <NavDropdown title="Login" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  navigate("/login");
                }}
              >
                Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/");
                  dispatch(deleteToken({}));
                  console.log("hola");
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
