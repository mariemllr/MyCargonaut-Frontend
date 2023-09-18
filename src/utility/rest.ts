import axios, { CreateAxiosDefaults } from "axios";

const AXIOS_CONFIG: CreateAxiosDefaults<unknown> = {
  baseURL: "http://ec2-16-170-140-95.eu-north-1.compute.amazonaws.com:3000/",
  withCredentials: true,
};

export default axios.create(AXIOS_CONFIG);
