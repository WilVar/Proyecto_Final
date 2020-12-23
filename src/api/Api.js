import axios from "axios";

let BaseApi = axios.create({
  baseURL: "http://localhost:3000/api"
});

let Api = function() {

  let token = localStorage.getItem("token");

  if (token) {
    BaseApi.defaults.headers.common["token"] = token;
  }

  return BaseApi;
};

export default Api;