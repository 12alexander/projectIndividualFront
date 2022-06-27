import axios from "axios";

const RegisterPackage = (data) => {
  const url =
    process.env.REACT_APP_BACKEND_ENDPOINT.concat("api/package/create");

  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("price", data.price);
  Array.from(data.images).forEach((el, i) => {
    formData.append(`images[${i}]`, el);
  });

  return axios.post(url, formData);
};

const GetPackage = async () => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
    "api/package/getData"
  );
  let dataPackage = {};
  try {
    dataPackage = await axios(url);
  } catch (err) {
    console.log(err);
  }
  return dataPackage.data;
};

export { GetPackage, RegisterPackage };
