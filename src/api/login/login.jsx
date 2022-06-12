import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export const PostLogin = (data) => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/user/login");
  const config = { headers: { "Content-Type": "application/json" } };
  return api.post(url, data, config);
};

export default PostLogin;
