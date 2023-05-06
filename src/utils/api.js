import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const getRequest = (url) => {
  return axios.get(`${API_BASE_URL}${url}`).catch((error) => {
    throw error;
  });
};
