import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

const PostLogin = (data) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/login");

  return api.post(url, data, config);
};

const RegisterLogin = (data) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/register");

  return api.post(url, data, config);
};

export { PostLogin, RegisterLogin };
