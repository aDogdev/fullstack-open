import axios from "axios";
import data from "../mocks/all.json";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAllCountries = () => {
  return axios.get(`${baseUrl}/all`).then((res) => res.data);
};

const getCountry = (name) => {
  return axios.get(`${baseUrl}name/${name}`).then((res) => res.data);
};

export { getAllCountries, getCountry };
