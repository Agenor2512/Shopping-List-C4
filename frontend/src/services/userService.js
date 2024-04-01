/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const addUser = ({ name, email, password }) => {
  client
    .post(`/register`, { name, email, password })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};
