<template>
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

