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
          Especiales para cada servicio
        </p>
      </div>
    </div>

    <div class="row">
      <ServiceCard :service="service1" />
      <ServiceCard :service="service2" />
      <ServiceCard :service="service3" />
      <ServiceCard :service="service4" />
      <ServiceCard :service="service5" />
      
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

export default {
  name: "Servicios",
  props: ["services"],
  components: {
    ServiceCard: ServiceCard,
  },
  data() {
    return {
      service1: {
        name: "Manguera de Aire",
        description:
          "Especial para secar lugares donde un trapo no puede llegar. ",
        image: IMP1,
        myUrl: "https://codigofacilito.com/cursos/Python",
      },
      service2: {
        name: "Pintura",
        description:
          "Todo tipo de colores para dejar tu maquina o herramienta como nueva.",
        image: IMP2,
        myUrl: "https://codigofacilito.com/cursos/JAVA",
      },
      service3: {
        name: "Aceites Especiales",
        description:
          "Líquidos exclusivos para lustrar, aceitar y linaza",
        image: IMP3,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      },
       service4: {
        name: "Liquido de Aseo",
        description:
          "Son detergente, cloro y productos normales de aseo.",
        image: IMP4,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      },
       service5: {
        name: "Manguera",
        description:
          "Tiene tres niveles de presión para disparar agua.",
        image: IMP5,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      }
    };
  },
};
</script>