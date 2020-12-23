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
          conoce nuestros servicios
        </p>
      </div>
    </div>

    <div class="row">
      <ServiceCard :service="service1" />
      <ServiceCard :service="service2" />
      <ServiceCard :service="service3" />
      <ServiceCard :service="service4" />
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

export default {
  name: "Servicios",
  props: ["services"],
  components: {
    ServiceCard: ServiceCard,
  },
  data() {
    return {
      service1: {
        name: "Maquinaria Pesada",
        description:
          "Contamos con instrumentos especializados para el mantenimiento de máquinas a nivel industrial.",
        image: IMS1,
        myUrl: "https://codigofacilito.com/cursos/Python",
      },
      service2: {
        name: "Aseo General",
        description:
          "Le brindamos un servicio sencillo en donde se realizara la debida limpieza en su lugar de trabajo para un ambiente más fresco y cómodo.",
        image: IMS2,
        myUrl: "https://codigofacilito.com/cursos/JAVA",
      },
      service3: {
        name: "Instrumentos Obra",
        description:
          "Limpieza de máquinas, herramientas y equipos para el trabajo de construcción.",
        image: IMS3,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      },
       service4: {
        name: "Rapiclean Max",
        description:
          "Se ofrece un paquete con todos nuestros otros tres servicios disponibles: Maquinaria Pesada, Instrumentos Obra, Aseo General.",
        image: IMS4,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      }
    };
  },
};
</script>