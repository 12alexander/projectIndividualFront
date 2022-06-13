//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {} from "../../../api/packages/packages";
import { RegisterPackage } from "../../../api/packages/packages";
import { Alert, Button, Col, Row, Form } from "react-bootstrap/";

const ComponentForm = () => {
  const [message, setMessage] = useState("");
  const [dataPackages, setDataPackages] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const handleData = (event) => {
    RegisterPackage(dataPackages)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Paquete Guardado Exitosamente");
        }
      })
      .catch((err) => {
        setMessage("Error al Guardar Paquete");
        console.log(err);
      });
  };

  return (
    <>
      {message && (
        <Alert variant="success" onClose={() => setMessage("")} dismissible>
          <Alert.Heading>{message}</Alert.Heading>
        </Alert>
      )}
      <Form style={{ paddingTop: "3rem" }}>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese Título"
            name="title"
            onChange={(event) =>
              setDataPackages({ ...dataPackages, title: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese Descripción"
            onChange={(event) =>
              setDataPackages({
                ...dataPackages,
                description: event.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            placeholder="Ingrese Precio"
            onChange={(event) =>
              setDataPackages({ ...dataPackages, price: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Imagenes</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={(event) =>
              setDataPackages({ ...dataPackages, images: event.target.files })
            }
          />
        </Form.Group>

        <Button variant="primary" onClick={handleData}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default ComponentForm;
