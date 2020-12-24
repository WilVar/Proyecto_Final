import Api from "./Api";

export default {
  list() {
    return Api().get("/articulo/list");
  },

  add(form) {
    return Api().post("/articulo/add", form);
  },

  update(form) {
    return Api().post("/articulo/update",form);
  },

  activate(idArticulo) {
    return Api().post("/articulo/activate", idArticulo);
  },

  deactivate(idArticulo) {
    return Api().post("/articulo/deactivate",idArticulo);
  },

};