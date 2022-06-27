//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetPackage } from "../../../api/packages/packages";
import { Card, Button, Col, Row } from "react-bootstrap/";
import { setReservation } from "../../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cardPackages.css";

const CardPackages = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => {
    return state;
  });
  const type = reservation.reservation.reservation.type;
  const [dataPackage, setDataPackage] = useState([]);
  const getDataPackage = () => {
    GetPackage().then((datos) => {
      setDataPackage(datos.value);
    });
  };
  useEffect(getDataPackage, []);
  let navigate = useNavigate();

  return (
    <>
      <Row xs={1} md={2} xl={2} className="container-reservation">
        {dataPackage.map((e, index) => (
          <Col key={e._id} className="content-column">
            <Card style={{ width: "20rem", marginBottom: "2.5rem" }}>
              <Card.Img variant="top" src={e.images[0]} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>{e.description}</Card.Text>

                {type === "admin" && <Button variant="danger">Eliminar</Button>}
                {type !== "admin" && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      dispatch(
                        setReservation({
                          package: { id: e._id, ...e },
                        })
                      );
                      navigate(`/artist/view`);
                    }}
                  >
                    Comprar (S/. {e.price.$numberDecimal})
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardPackages;
