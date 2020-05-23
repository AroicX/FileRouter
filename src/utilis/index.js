import axios from "axios";
import api from "./api";

export const fetcher = axios.create({
  baseURL: api.BASE_URL,
  timeout: 5000,
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    console.log(data.token);
    return data;
  }),
  validateStatus: function (status) {
    return status >= 200 && status < 400
  }
});

fetcher.interceptors.request.use(
  function (config) {
    let looalToken = JSON.parse(localStorage.token);

    config.headers = {
      ...config.headers,
    };
    config.headers.Accept = "application/json";
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `${looalToken.token}`;
    // you can also do other modification in config
    // config.url = `${config.url}?term_id=1`;

    console.log(`The url to the api is ${config.url}`);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

fetcher.interceptors.response.use(
  function (response) {
    if (response.status === 400) {
      console.log("wahala dey");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);