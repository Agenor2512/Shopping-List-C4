/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readById = (ingredientId) => {
  return client
    .get("ingredients/:id", { id: ingredientId })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const searchByQuery = (query) => {
  return client
    .get("/ingredients", { params: { query } })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const create = (ingredientName) => {
  client
    .post("/ingredients", { name: ingredientName })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};
