/* eslint-disable no-promise-executor-return */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readAll = () => {
  return new Promise((r) => setTimeout(r, 2000))
    .then(() => client.get("/ingredients"))
    .then((response) => response.data);
};

export const searchByQuery = (query) => {
  return client
    .get("/ingredients", { params: { query } })
    .then((response) => response.data);
};
