import { useState, useEffect } from "react";
import { GetArtist, DeleteArtist } from "../../../api/artist/artist";
import { Card, Button, Col, Row } from "react-bootstrap/";
import { setReservation } from "../../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cardArtist.css";

const CardArtist = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => {
    return state;
  });
  const type = reservation.reservation.reservation.type;
  let navigate = useNavigate();
  const [dataArtist, setDataArtist] = useState([]);

  const getDataArtist = async () => {
    const token = reservation?.reservation?.reservation?.token;

    const data = await GetArtist(token);

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
                <br></br>
                {type === "admin" && (
                  <Button
                    variant="danger"
                    onClick={() => {
                      DeleteArtist({ id: e._id });
                      let tempDataArtist = [...dataArtist];
                      tempDataArtist = tempDataArtist.filter(
                        (element) => element.id !== e._id
                      );
                      setDataArtist(tempDataArtist);
                      navigate(`/dashboard/artist`);
                      navigate(`/dashboard/artist/view`);
                    }}
                  >
                    Eliminar
                  </Button>
                )}
                {type !== "admin" && (
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
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardArtist;
