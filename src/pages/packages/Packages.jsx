import React from "react";
//import "./packages.css";
import ComponentNavbar from "../../components/navBar/NavBar";
import CardPackages from "./components/CardPackages";
import ComponentForm from "./components/Form";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap/";

const Packages = () => (
  <>
    <ComponentNavbar />
    <Container>
      <Outlet />
    </Container>
  </>
);

export default Packages;
