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

const DeleteArtist = (data) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/artist/remove");

  return axios.post(url, data, config);
};

const GetArtist = async (token) => {
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/artist/getData");
  const config = {
    headers: { Authorization: "Bearer " + token },
  };
  let dataArtist = {};
  try {
    dataArtist = await axios(url, config);
  } catch (err) {
    console.log(err);
  }
  return dataArtist.data;
};

export { GetArtist, RegisterArtist, DeleteArtist };
