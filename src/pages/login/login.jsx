//import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Form,
  Container,
  Alert,
} from "react-bootstrap/";
import { PostLogin } from "../../api/login/login";
import ComponentNavbar from "../../components/navBar/NavBar";
import { setReservation } from "../../store/slices/reservation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) => {
    return state;
  });
  const dataArtist = reservation.reservation.token;
  console.log(dataArtist);
  const [bol, setBol] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log("tokennnn");

    PostLogin(user)
      .then((response) => {
        console.log("tipe desde el front ----------------------");
        console.log(response);
        if (response.status === 200) {
          setBol("bienvenido");
          dispatch(
            setReservation({
              token: response.data.message,
              user: user.email,
              type: response.data.type,
            })
          );
          console.log(`este es el tipo ${response.data.type}`);
          if (response.data.type === "admin") {
            navigate(`/dashboard`);
          } else {
            navigate(`/`);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("**************** reservation");
    console.log(reservation);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const token = reservation.reservation.reservation.token
      ? reservation.reservation.reservation.token
      : "";
    if (token != "") navigate(`/`);
    console.log(token);
    console.log(reservation.reservation.reservation.token);
  }, []);
  return (
    <>
      <ComponentNavbar />
      <Container style={{ paddingTop: "3rem" }}>
        {bol && (
          <Alert variant="success" onClose={() => setBol("")} dismissible>
            <Alert.Heading>{bol}</Alert.Heading>
          </Alert>
        )}
        <Form
          onSubmit={handleClick}
          className="mb-3"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card border="primary" style={{ width: "70%" }}>
            <Card.Header>Inicio de Sesión</Card.Header>
            <Card.Body style={{ width: "100%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Usuario"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  rows={3}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row
                style={{
                  display: "inline-grid",
                  gridTemplateRows: "50% 50%",
                  gridTemplateColumns: "50% 50%",
                  gridGap: "50px",
                  marginLeft: "30%",
                  marginTop: "1.5rem",
                }}
              >
                <Button type="submit">Iniciar Sesión</Button>
                <Button>Cancelar</Button>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </>
  );
};

export default Login;
