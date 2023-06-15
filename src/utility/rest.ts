import axios, { CreateAxiosDefaults } from "axios";

const AXIOS_CONFIG: CreateAxiosDefaults<unknown> = {
  baseURL: process.env.REACT_APP_BACKEND_HOST ?? "http://localhost:3000",
  withCredentials: true,
};

export default axios.create(AXIOS_CONFIG);
