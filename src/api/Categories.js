import Api from "./Api";

export default {
    add(form) {
    return Api().post("/categoria/add", form);
  },

  update(form) {
    return Api().post("/categoria/update", form);
  },

  activate(idCategory) {
    return Api().post("/categoria/activate", idCategory);
  },

  deactivate(idCategory) {
    return Api().post("/categoria/deactivate", idCategory);
  },

  list() {
    return Api().get("/categoria/list");
  },

};