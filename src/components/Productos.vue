<template>
  <div>
    <div class="container-fluid" style="text-align: center; margin: 3%">
      <div class="col" style="text-align: center; margin-top: 40px">
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>Conoce nuestros productos de</b>
        </h1>
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>limpieza y mantenimiento </b>
        </h1>
        <p
          style="
            margin-top: 1.5%;
            font-size: 23px;
            text-align: center;
            color: #4177fb;
          "
        >
          Productos
        </p>
      </div>
    </div>

    <div class="row" v-if="this.articles">
      <ServiceCard :service="articles[0]" />
      <ServiceCard :service="articles[1]" />
      <ServiceCard :service="articles[2]" />
      <ServiceCard :service="articles[3]" />
      <ServiceCard :service="articles[4]" />
    </div>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import IMP1 from "../assets/mangueraA.png";
import IMP2 from "../assets/pintura.png";
import IMP3 from "../assets/aceites.png";
import IMP4 from "../assets/liquido.png";
import IMP5 from "../assets/manguera.png";
import "../assets/css/servicios.css";
import Articles from '../api/Articles.js';

export default {
  name: "Productos",
  components: {
    ServiceCard: ServiceCard,
  },
  data() {
    return {
      articles: null,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      Articles.list().then((res) => {
        this.articles = res.data;
      });
    },
  },
};
</script>