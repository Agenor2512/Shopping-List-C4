/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const modify = ({ listId, ingredientId, quantity }) => {
  return client
    .put(`/list/${listId}/ingredients/${ingredientId}`, {
      quantity,
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
