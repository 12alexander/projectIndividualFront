import React from "react";
import "./Main.css";
import ComponentNavbar from "../../components/navBar/NavBar";
import ComponentCarousel from "../../components/carousel/Carousel";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap/";
import CardArtist from "../artist/components/CardArtist";
import IMG from "../../assets/contact.jpeg";
import { useNavigate } from "react-router-dom";
import CardPackages from "./../packages/components/CardPackages";

const Main = () => {
  let navigate = useNavigate();
  return (
    <>
      <ComponentNavbar />
      <ComponentCarousel />
      <Container fluid>
        <Row style={{ textAlign: "center" }}>
          <strong className="services">Nuestros Servicios</strong>
          <CardPackages />
        </Row>
        <Row className="container-contact">
          <Col className="contac-body">
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
              <div className="col-7">
                <strong className="titulo">Escríbenos</strong>
                <div className="linea"></div>
              </div>
              <Form className="col-7 mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    className="b-input"
                    placeholder="Nombre (obligatorio)"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="email"
                    className="b-input"
                    placeholder="Correo electrónico (obligatorio)"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    className="b-input"
                    placeholder="Teléfono"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="email"
                    className="b-input"
                    placeholder="Correo electronico (obligatorio)"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Control
                    className="b-input"
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="mensaje"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-enviar">
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
          <Col className="contain-img">
            <Image className="contac-img" src={IMG} />
          </Col>
        </Row>
      </Container>
      <footer className="text-center text-lg-start bg-dark text-white ">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block"></div>

          <div>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a onClick={() => navigate("/")} className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: Mostacho
        </div>
      </footer>
    </>
  );
};

export default Main;
