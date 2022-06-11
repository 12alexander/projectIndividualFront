//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetArtist } from "../../../api/artist/artist";
import { Card, Button, Col, Row } from "react-bootstrap/";
import { setReservation } from "../../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cardArtist.css";

const CardArtist = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => {
    console.log(state);
    return state;
  });
  let navigate = useNavigate();
  const [dataArtist, setDataArtist] = useState([]);
  const getDataArtist = async () => {
    const token = reservation?.reservation?.reservation?.token;
    console.log(token);
    const data = await GetArtist(token);
    console.log(data.value);
    setDataArtist(data.value);
  };
  useEffect(() => {
    getDataArtist();
  }, []);

  return (
    <>
      <Row xs={1} md={2} xl={4} className="container-artist">
        {dataArtist?.map((e, index) => (
          <Col key={e._id} className="content-column">
            <Card
              style={{
                width: "18rem",
                marginBottom: "2.5rem",
                alignItems: "center",
              }}
            >
              <Card.Img variant="top" src={e.images} className="artist-img" />
              <Card.Body>
                <Card.Title style={{ textTransform: "uppercase" }}>
                  {e.name}
                </Card.Title>
                <Button
                  variant="secondary"
                  onClick={() => {
                    dispatch(
                      setReservation({
                        artist: { id: e._id, ...e },
                      })
                    );
                    navigate(`/reservation/create`);
                  }}
                >
                  Seleccionar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardArtist;