import axios from "axios";

// const baseUrl: string = "http://server:3333/api1/";
// const baseUrl = "http://localhost:3333/api1/test";
const baseUrl = `${import.meta.env.VITE_BASE_URL}/test`;
console.log(baseUrl);

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

export default {
  getAll,
};
