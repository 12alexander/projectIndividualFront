import { useState, useEffect } from "react";

import { Card, Button, Col, Row } from "react-bootstrap/";
import { setReservation } from "../../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataPicker from "../../../components/datePicker/DataPicker";
import "./cardReservation.css";

const CardReservation = () => {
  const [hours, setHours] = useState([
    "8:00",
    "9:30",
    "11:00",
    "12:30",
    "16:00",
    "17:30",
    "19:00",
  ]);
  const [day, setDay] = useState("");
  const dispatch = useDispatch();
  const { reservation } = useSelector((state) => {
    return state;
  });
  let navigate = useNavigate();

  const dataArtist = reservation.reservation.artist;
  const dataPackage = reservation.reservation.package;
  useEffect(() => {
    if (reservation.reservation.token === undefined) {
      navigate(`/`);
    }
  }, [navigate, reservation.reservation.token]);
  return (
    <div className="container" style={{ paddingTop: "3.5rem" }}>
      <div className="row">
        <div className="col">
          <Row style={{ paddingBottom: "1.5rem" }}>
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Artista</Card.Header>
              <Card.Body>
                <Card.Title>{dataArtist.name}</Card.Title>
                <Card.Img variant="top" src={dataArtist.images} />
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Paquete</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={dataPackage.images} />
                <Card.Title>{dataPackage.title}</Card.Title>
                <Card.Text>{dataPackage.description}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
        <Col>
          <DataPicker setDay={setDay} hours={hours} setHours={setHours} />
          <div className="col-9 timetable" style={{ marginTop: "2rem" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              {hours.map((e, index) => (
                <Button
                  style={{
                    marginTop: "0.2rem",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                  className="btn-hours"
                  key={index}
                  variant="secondary"
                  value={e}
                  onClick={(elem) => {
                    dispatch(
                      setReservation({
                        hour: elem.target.value,
                        day: day,
                      })
                    );

                    navigate(`/confirmation`);
                  }}
                >
                  {e}
                </Button>
              ))}
            </Card>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default CardReservation;
