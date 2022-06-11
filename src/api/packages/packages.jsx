import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const RegisterPackage = (data) => {
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/package/create");
  //const url = "http://localhost:5000/api/package/create";
  console.log("----------");
  const formData = new FormData();
  console.log("----------");
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("price", data.price);
  Array.from(data.images).forEach((el, i) => {
    formData.append(`images[${i}]`, el);
    console.log("imagenes");
    console.log(el);
  });

  axios
    .post(url, formData, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) {
        <Alert variant="danger">
          <Alert.Heading>Paquete guardado Exitosamente!</Alert.Heading>
        </Alert>;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const GetPackage = async () => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/package/getData");
  //const url = "http://localhost:5000/api/package/getData";
  let dataPackage = {};
  try {
    dataPackage = await axios(url);
  } catch (err) {
    console.log(err);
  }
  return dataPackage.data;
};

export { GetPackage, RegisterPackage };
