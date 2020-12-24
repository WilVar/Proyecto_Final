<template>
<<<<<<< HEAD
  <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config" :actions="actions" @on-create="create">
      <template slot="id" slot-scope="props">
        <button class="btn btn-warning color_text" @click="edit(props.cell_value)">
            Editar
        </button>
        <button class="btn btn-danger color_text" @click="inactivate(props.cell_value)">
            Eliminar
        </button>
    </template>
  </vue-bootstrap4-table>
</template>
    
<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import Categoria from '../api/Categoria.js';

export default {
  name: "Categorias",
  components: { VueBootstrap4Table },
  methods: {
            create(payload) {
                console.log(payload);
                this.$router.push("/formulario");
            },
            edit(id_categoria){
                alert("editar "+id_categoria);
            },
            inactivate(id_categria){
                alert("inactivar "+id_categoria);
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
            placeholder: "Ingrese nombre de la categoria",
          },
          sort: false,
        },
        {
          label: "Descripcion",
          name: "descripcion",
          filter: {
            type: "simple",
            placeholder: "Escriba la descripcion",
          },
          sort: false,
        },
        {
          label: "Acciones",
          name: "id",
        },
      ],
      actions: [
        {
          btn_text: "Nueva Categoria",
          event_name: "on-create",
          class: "btn btn-success color_text",
          event_payload: {
            msg: "Nueva Categoria",
          },
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: false,
        card_title: "Lista de Categorias",
      },
    };
  },
  created(){
      var cat = [];
      
      Categoria.list().then((response) => {
          console.log("response",response.data);
          const dataApi = response.data;
          dataApi.map( (categoria) => {

              let cateAux = {
                  id: categoria.id,
                  name: categoria.nombre,
                  descripcion: categoria.descripcion,
              }

              cat.push(cateAux);
          });

          this.rows = cat;
      }).catch((error)=>{
          console.log("error",error);
      });
  }
};
</script>

<style >
.color_text{
    color: aliceblue;
}
</style>
=======
  <div>
    <div class="container-fluid" style="text-align: center; margin: 3%">
      <div class="col" style="text-align: center; margin-top: 40px">
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>Aprovecha toda nuestra experiencia</b>
        </h1>
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>en limpieza y mantenimiento </b>
        </h1>
        <p
          style="
            margin-top: 1.5%;
            font-size: 23px;
            text-align: center;
            color: #4177fb;
          "
        >
          conoce nuestras categorias
        </p>
      </div>
    </div>
    <div class="row" v-if="this.services">
      <ServiceCard :service="services[0]" />
      <ServiceCard :service="services[1]" />
      <ServiceCard :service="services[2]" />
      <ServiceCard :service="services[3]" />
    </div>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import IMS1 from "../assets/maqp.png";
import IMS2 from "../assets/AseoGeneral.png";
import IMS3 from "../assets/Mezcladora.png";
import IMS4 from "../assets/aseo.png";
import "../assets/css/servicios.css";
import Categories from '../api/Categories.js';

export default {
  name: "Categorias",
  components: {
    ServiceCard: ServiceCard,
  },
  data() {
    return {
      services: null,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      Categories.list().then((res) => {
        this.services = res.data;
      });
    },
  },
};
</script>
>>>>>>> e6a4b7dec96475be98a8bf183cda126a3a11884c
