import axios from "axios";
const api_key = import.meta.env.VITE_SOME_KEY;
import data from "../mocks/all.json";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAllCountries = () => {
  return axios.get(`${baseUrl}/all`).then((res) => res.data);
};

const getCountry = (name) => {
  return axios.get(`${baseUrl}name/${name}`).then((res) => res.data);
};

const getWeather = (name) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${api_key}`
    )
    .then((res) => res.data);
};

export { getAllCountries, getCountry, getWeather };
