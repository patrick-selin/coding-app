import axios from "axios";

// const baseUrl: string = "http://localhost:3333/api1/";
// const baseUrl: string = "http://server:3333/api1/";
// const baseUrl: string = "/api1/test";
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/test`;
// const baseUrl = "/api1/test";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

export default {
  getAll,
};
