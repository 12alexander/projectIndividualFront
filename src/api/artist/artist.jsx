import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const RegisterArtist = (data) => {
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/artist/create");

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("services", data.services);
  formData.append("images", data.images[0]);

  return axios.post(url, formData);
};

const GetArtist = async (token) => {
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/artist/getData");
  console.log(`llegooooooo ${token}`);
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  //const url = "http://localhost:5000/api/artist/getData";
  let dataArtist = {};
  try {
    dataArtist = await axios(url, config);
  } catch (err) {
    console.log(err);
  }
  return dataArtist.data;
};

export { GetArtist, RegisterArtist };
