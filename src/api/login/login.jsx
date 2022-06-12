import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const PostLogin = (data) => {
  const config = { headers: { "Content-Type": "application/json" } };
  //const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/login");
  const url = "http://localhost:5000/api/user/login";

  return axios.post(url, data, config);
};

export { PostLogin };
