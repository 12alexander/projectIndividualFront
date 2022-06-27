import React from "react";
import ComponentNavbar from "../../components/navBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";

const Reservation = () => (
  <>
    <ComponentNavbar />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default Reservation;
