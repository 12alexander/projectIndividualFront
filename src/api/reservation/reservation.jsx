import axios from "axios";

const RegisterReservation = (data) => {
  const url = "http://localhost:5000/api/reservation/create";
  console.log("estamos en reservation");
  console.log(data);
  return axios.post(url, data);
};

const GetHours = (data) => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
    "api/reservation/findHour"
  );
  //const url = "http://localhost:5000/api/reservation/findHour";
  let dataHours = {};
  try {
    dataHours = axios.post(url, data);
  } catch (err) {
    console.log(err);
  }
  console.log("data hours desde front");
  return dataHours.then((data) => data.data.value);
};

export { RegisterReservation, GetHours };
