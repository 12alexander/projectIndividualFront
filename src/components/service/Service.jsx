import { Container } from "react-bootstrap/";
import CardPackages from "../../pages/packages/components/CardPackages";
const Service = () => {
  return (
    <Container fluid>
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <strong className="services">Nuestros Servicios</strong>
        <CardPackages />
      </div>
    </Container>
  );
};

export default Service;
