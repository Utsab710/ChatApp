import axios from "axios";

export const axiosInstance = axios.create({
  basURL: "http://localhost:5001/api",
  withCredentials: true, //sending cookies for every request
});
