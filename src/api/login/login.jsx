import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const PostLogin = (data) => {
  const url = "http://localhost:5000/api/user/login";

  return axios.post(url, data);
};

export { PostLogin };
