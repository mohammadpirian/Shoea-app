import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:3002" });

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
export default instance;
