import React from "react";
//import "./packages.css";
import ComponentNavbar from "../../components/navBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";

const Artists = () => (
  <>
    <ComponentNavbar />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default Artists;
