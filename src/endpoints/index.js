import axios from "axios";

const baseUrl = "https://autodesk-challenge.free.beeceptor.com";

export const createItem = (payload) =>
  axios.post(
    `${baseUrl}/item`,
    { ...payload },
  );

export const getItems = () =>
  axios.get(`${baseUrl}/items`);

export const dbDeleteItem = (itemId) =>
  axios.delete(`${baseUrl}/items/${itemId}`);
