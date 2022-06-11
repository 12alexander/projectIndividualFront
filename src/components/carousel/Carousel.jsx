import React from "react";
import "./carousel.css";
import { Button, Figure } from "react-bootstrap";
import IMG from "../../assets/logo_blanco_mostacho.png";
//import "../../../public/portada.jpg";

const ComponentCarousel = () => (
  <div className="main-content">
    <img className="main-img" src="/portada.jpg" alt="First slide" />
    <div className="superPosition"></div>
    <div className="body-content">
      <h1 className="main-text">
        <Figure.Image width={320} height={200} alt="171x180" src={IMG} />
        <p>Redefiniendo tu estilo!!</p>
        <Button className="main-button" variant="secondary" size="lg">
          contactanos
        </Button>
      </h1>
    </div>
  </div>
);

export default ComponentCarousel;
