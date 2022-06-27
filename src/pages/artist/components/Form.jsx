//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { RegisterArtist } from "../../../api/artist/artist";
import { GetPackage } from "../../../api/packages/packages";
import { Button, Col, Form, Alert } from "react-bootstrap/";

const ComponentForm = () => {
  const [message, setMessage] = useState("");
  const [dataArtist, setDataArtist] = useState({
    name: "",
    services: [],
    images: [],
  });
  const handleData = (event) => {
    RegisterArtist(dataArtist)
      .then((response) => {
        if (response.status === 200) {
          setMessage("Artista Guardado Exitosamente");
        }
      })
      .catch((err) => {
        setMessage("Error al Guardar Artisa");
        console.log(err);
      });
  };

  const [dataService, setDataService] = useState([]);
  const getDataService = () => {
    GetPackage().then((datos) => {
      setDataService(datos.value);
    });
  };

  const handleOnChange = (e) => {
    var { name, checked } = e.target;
    if (checked === true) {
      setDataArtist({
        ...dataArtist,
        services: [...dataArtist.services, (dataArtist.services.push = name)],
      });
    }
  };
  useEffect(getDataService, []);
  return (
    <>
      {message && (
        <Alert variant="success" onClose={() => setMessage("")} dismissible>
          <Alert.Heading>{message}</Alert.Heading>
        </Alert>
      )}
      <Form style={{ paddingTop: "3rem" }}>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Ingrese Nombre"
            onChange={(event) => {
              setDataArtist({ ...dataArtist, name: event.target.value });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagen de Perfil</Form.Label>
          <Form.Control
            type="file"
            onChange={(event) => {
              setDataArtist({ ...dataArtist, images: event.target.files });
            }}
          />
        </Form.Group>

        <Form.Label className="mb-3">Servicios</Form.Label>
        <div key="checkbox" className="mb-3">
          {dataService.map((el, index) => (
            <Form.Check
              type="checkbox"
              id={el._id}
              key={el._id}
              label={el.title}
              name={el.title}
              onChange={handleOnChange}
            />
          ))}
        </div>
        <Button btn="test-register" variant="primary" onClick={handleData}>
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default ComponentForm;
