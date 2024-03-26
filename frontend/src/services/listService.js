/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readById = () => {
  return client
    .get(`lists/2de1feec-a19a-4f16-9226-af782acdab42`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
