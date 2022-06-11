import { useNavigate } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap/";
import ComponentNavbar from "../../../components/navBar/NavBar";

const ReservationSuccessful = () => {
  const navigate = useNavigate();
  return (
    <>
      <ComponentNavbar />
      <Container>
        <Card style={{ marginTop: "5rem" }}>
          <Card.Header as="h5">Reservación Exitosa</Card.Header>
          <Card.Body>
            <Card.Text>Por favor revise su correo.</Card.Text>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Inicio
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ReservationSuccessful;
