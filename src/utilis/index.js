import axios from "axios";
import api from "./api";

export const rq = axios.create({
  baseURL: api.BASE_URL,
  timeout: 5000,
});

rq.interceptors.request.use(
  function (config) {
    let cache = JSON.parse(localStorage.staleState);

    // console.log(cache)

    config.headers = { ...config.headers };
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${cache.token}`;
    // you can also do other modification in config
    // console.log(config)
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

rq.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      // your failure logic
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
