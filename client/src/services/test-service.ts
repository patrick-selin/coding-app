import axios from "axios";

const baseUrl: string = "http://localhost:3333/api1/test";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

export default {
  getAll,
};
