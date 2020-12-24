import Api from "./Api";

export default {
  list() {
    return Api().get("/categoria/list");
  },

  add(form) {
    return Api().post("/categoria/add", form);
  },

  update(form) {
    return Api().post("/categoria/update",form);
  },

  activate(idCategoria) {
    return Api().post("/categoria/activate", idCategoria);
  },

  deactivate(idCategoria) {
    return Api().post("/categoria/deactivate",idCategoria);
  },

};