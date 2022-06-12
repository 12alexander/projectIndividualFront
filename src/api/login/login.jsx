import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
const api = axios.create({
  withCredentials: true,
});

const PostLogin = (data) => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/login");
  //const url = "http://localhost:5000/api/user/login";

  return api.post(url, data);
};

export { PostLogin };
