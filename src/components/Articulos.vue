<template>
  <vue-bootstrap4-table
    :rows="rows"
    :columns="columns"
    :config="config"
    :actions="actions"
    @on-create="create"
  >
    <template slot="id" slot-scope="props">
      <button
        class="btn btn-warning color_text"
        @click="edit(props.cell_value)"
      >
        Editar
      </button>
      <button
        class="btn btn-danger color_text"
        @click="inactivate(props.cell_value)"
      >
        Eliminar
      </button>
    </template>
  </vue-bootstrap4-table>
</template>
    
<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import Articulo from "../api/Articulo.js";

export default {
  name: "Articulos",
  components: { VueBootstrap4Table },
  methods: {
    create(payload) {
    
      this.$router.push("/registrar");
    },
    edit(id_articulo) {
      alert("editar " + id_articulo);
    },
    inactivate(id_articulo) {
      alert("inactivar " + id_articulo);
    },
  },
  data() {
    return {
      rows: [],
      columns: [
        {
          label: "Nombre",
          name: "name",
          filter: {
            type: "simple",
            placeholder: "Nombre del articulo",
          },
          sort: false,
        },
        {
          label: "Descripcion",
          name: "descripcion",
        },
        {
          label: "Categoria",
          name: "categoria",
        },
        {
          label: "Url",
          name: "url",
        },
        {
          label: "Acciones",
          name: "id",
        },
      ],
      actions: [
        {
          btn_text: "Nuevo Producto",
          event_name: "on-create",
          class: "btn btn-success color_text",
          event_payload: {
            msg: "Nuevo Producto",
          },
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: false,
        card_title: "Listado de Productos",
      },
    };
  },
  created() {
    var prod = [];

    Articulo.list()
      .then((response) => {
        
        const dataApi = response.data;
        dataApi.map((articulo) => {
          let prodAux = {
            id: articulo.id,
            name: articulo.nombre,
            descripcion: articulo.descripcion,
            categoria: articulo.nombreCategoria,
            url: articulo.url,
          };

          prod.push(prodAux);
        });

        this.rows = prod;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
</script>

<style >
.color_text {
  color: aliceblue;
}
</style>