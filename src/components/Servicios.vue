<template>
  <div>
    <div class="container-fluid" style="text-align: center; margin: 3%">
      <div class="col" style="text-align: center; margin-top: 40px">
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>Aprovecha toda nuestra experiencia</b>
        </h1>
        <h1 style="font-size: 50px; text-align: center; font-family: verdana">
          <b>en programación </b>
        </h1>
        <p
          style="
            margin-top: 1.5%;
            font-size: 23px;
            text-align: center;
            color: #4177fb;
          "
        >
          conoce nuestros cursos
        </p>
      </div>
    </div>

    <div class="row">
      <ServiceCard :service="service1" />
      <ServiceCard :service="service2" />
      <ServiceCard :service="service3" />
    </div>
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";
import Python from "../assets/pyton.png";
import Java from "../assets/java.png";
import MySQL from "../assets/sql.png";
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
        name: "Curso Python",
        description:
          " Python es un lenguaje de programación multiparadigma, lo cual significa que soporta Orientación a Objetos, Programación Imperativa y Programación Funcional.",
        image: Python,
        myUrl: "https://codigofacilito.com/cursos/Python",
      },
      service2: {
        name: "Curso Java",
        description:
          "Java es uno de los lenguajes de programación más populares desde el 2012. Java está  presente tanto en computadores, consolas de videojuegos, dispositivos móviles y hasta en la internet.",
        image: Java,
        myUrl: "https://codigofacilito.com/cursos/JAVA",
      },
      service3: {
        name: "Curso MySQL",
        description:
          "MySQL es un sistema de gestión de bases de datos relacional, es considerada como la base de datos de código abierto más popular del mundo. Cuenta con licencia pública, y licencia comercial.",
        image: MySQL,
        myUrl: "https://edutin.com/curso-de-mysql-4303",
      },
    };
  },
};
</script>