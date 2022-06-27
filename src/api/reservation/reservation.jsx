import axios from "axios";

const RegisterReservation = (data) => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
    "api/reservation/create"
  );
  return axios.post(url, data);
};

const GetHours = (data) => {
  const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
    "api/reservation/findHour"
  );
  let dataHours = {};
  try {
    dataHours = axios.post(url, data);
  } catch (err) {
    console.log(err);
  }
  return dataHours.then((data) => data.data.value);
};

export { RegisterReservation, GetHours };
