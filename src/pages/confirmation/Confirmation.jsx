import React from "react";
import { useSelector } from "react-redux";
import ComponentNavbar from "../../components/navBar/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RegisterReservation } from "../../api/reservation/reservation";
import "./confirmation.css";

const Reservation = () => {
  const navigate = useNavigate();
  const { reservation } = useSelector((state) => {
    return state;
  });
  const dataArtist = reservation.reservation.artist;
  const dataPackage = reservation.reservation.package;
  const hour = reservation.reservation.hour;
  const userEmail = reservation.reservation.user;
  const day = reservation.reservation.day;
  console.log("reservation del front ");
  console.log(reservation);
  const handleClick = () => {
    const data = {
      user: userEmail,
      idPackage: dataPackage._id,
      idArtist: dataArtist._id,
      day: day,
      time: hour,
      price: dataPackage.price.$numberDecimal,
      service: dataPackage.title,
      artist: dataArtist.name,
    };
    RegisterReservation(data)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/succes`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ComponentNavbar />
      <Container>
        <div className="container-confirmation">
          <Card className="text-center">
            <Card.Header>Confirme sus Datos</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{dataPackage.title}</Card.Title>
                  <Card.Text>{dataPackage.description}</Card.Text>
                  <Card.Img
                    className="confirmation-img"
                    variant="top"
                    src={dataPackage.images}
                  />
                </Col>
                <Col>
                  <Card.Title>Barbero</Card.Title>
                  <Card.Text>{dataArtist.name}</Card.Text>
                  <Card.Img
                    className="confirmation-img"
                    variant="top"
                    src={dataArtist.images}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginTop: "3rem" }}>
                  <Card.Title>Fecha</Card.Title>
                  <Card.Text>{day}</Card.Text>
                  <Card.Title>Hora</Card.Title>
                  <Card.Text>{hour}</Card.Text>
                  <Card.Title>TOTAL</Card.Title>
                  <Card.Text>{`S/. ${dataPackage.price.$numberDecimal}`}</Card.Text>
                </Col>
                <Col style={{ marginTop: "4rem" }}>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleClick}
                    className="confirmation-button"
                  >
                    Reservar
                  </Button>
                </Col>
              </Row>
              {console.log("este es el paquete de la confirmation")}
              {console.log(day)}
              {console.log(dataPackage.price.$numberDecimal)}
            </Card.Body>
            <Card.Footer className="text-muted">Mostaho</Card.Footer>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Reservation;
