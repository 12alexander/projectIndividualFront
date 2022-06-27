import { Container, Image, Form, Button } from "react-bootstrap/";
import IMG from "../../assets/contact.jpeg";
import "./contact.css";
const Contact = () => {
  return (
    <Container className="container-contact">
      <div>
        <strong className="titulo">Escríbenos</strong>
        <div className="linea"></div>

        <Form className="frm-contact">
          <Form.Group className="contact-input" controlId="formBasicEmail">
            <Form.Control
              type="text"
              className="b-input"
              placeholder="Nombre (obligatorio)"
            />
          </Form.Group>

          <Form.Group className="contact-input" controlId="formBasicPassword">
            <Form.Control
              type="email"
              className="b-input"
              placeholder="Correo electrónico (obligatorio)"
            />
          </Form.Group>

          <Form.Group className="contact-input" controlId="formBasicPassword">
            <Form.Control
              type="text"
              className="b-input"
              placeholder="Teléfono"
            />
          </Form.Group>

          <Form.Group className="contact-input" controlId="formBasicPassword">
            <Form.Control
              type="email"
              className="b-input"
              placeholder="Correo electronico (obligatorio)"
            />
          </Form.Group>
          <Form.Group className="contact-input" controlId="formBasicCheckbox">
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
      <div className="container-img">
        <Image className="contac-img" src={IMG} />
      </div>
    </Container>
  );
};

export default Contact;
