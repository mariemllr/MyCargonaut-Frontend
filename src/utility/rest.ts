import axios, { CreateAxiosDefaults } from "axios";

const AXIOS_CONFIG: CreateAxiosDefaults<unknown> = {
  baseURL: "http://localhost:8080",
  withCredentials: true,
};

export default axios.create(AXIOS_CONFIG);
