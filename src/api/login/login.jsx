import axios from "axios";

const PostLogin = (data) => {
  //const config = { headers: { "Content-Type": "application/json" } };
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/login");

  return axios.post(url, data);
};

const RegisterLogin = (data) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/register");

  return axios.post(url, data, config);
};

export { PostLogin, RegisterLogin };
