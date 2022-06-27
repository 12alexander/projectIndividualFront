import React from "react";
import "./Main.css";
import ComponentNavbar from "../../components/navBar/NavBar";
import ComponentCarousel from "../../components/carousel/Carousel";
import Contact from "./../../components/contact/Contact";
import Service from "./../../components/service/Service";
import Footer from "./../../components/footer/Footer";

const Main = () => {
  return (
    <>
      <ComponentNavbar />
      <ComponentCarousel />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
