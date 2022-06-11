//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {} from "../../../api/packages/packages";
import { RegisterPackage } from "../../../api/packages/packages";
import { Card, Button, Col, Row, Form } from "react-bootstrap/";

const ComponentForm = () => {
  const [dataPackages, setDataPackages] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const handleData = (event) => {
    RegisterPackage(dataPackages);
    console.log(dataPackages);
  };

  return (
    <>
      <Form>
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
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ComponentForm;
