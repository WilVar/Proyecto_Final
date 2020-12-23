import Api from "./Api";

export default {
    add(form) {
    return Api().post("/articulo/add", form);
  },

  update(form) {
    return Api().post("/articulo/update", form);
  },

  activate(idCategory) {
    return Api().post("/articulo/activate", idCategory);
  },

  deactivate(idCategory) {
    return Api().post("/articulo/deactivate", idCategory);
  },

  list() {
    return Api().get("/articulo/list");
  },

};