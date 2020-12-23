import Api from "./Api";

export default {
  register(form) {
    return Api().post("/usuario/register", form);
  },

  login(form) {
    return Api().post("/usuario/login", form);
  },

  logout() {
    return Api().post("/usuario/logout");
  },

  list() {
    return Api().get("/usuario/list");
  },

};