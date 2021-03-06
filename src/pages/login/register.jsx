import { useState } from "react";
import { Card, Button, Row, Form, Container, Alert } from "react-bootstrap/";
import { RegisterLogin } from "../../api/login/login";
import ComponentNavbar from "../../components/navBar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const reservation = useSelector((state) => {
    return state;
  });
  const [bol, setBol] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClick = (e) => {
    e.preventDefault();

    RegisterLogin(user)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const token = reservation.reservation.reservation.token
      ? reservation.reservation.reservation.token
      : "";
    if (token !== "") navigate(`/`);
  }, [navigate, reservation.reservation.reservation.token]);
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
            <Card.Header>Registro de Usuario</Card.Header>
            <Card.Body style={{ width: "100%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Correo"
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
                <Button type="submit">Registrarse</Button>
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
