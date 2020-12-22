<template>
  <div class="container-fluid" style="text-align: center;">
        <h2>OUR TEAM</h2>
      <div class="row justify-content-center mb-5">
        <div class="col mt-5" v-for="(miembro, index) of Team" :key="index">
          <team-card :member="miembro" > </team-card>
        </div>
      </div>
    </div>
</template>

<script>
import TeamCard from "./TeamCard.vue";
import "../assets/css/equipo.css";

export default {
  name: "Equipo",
  props: ["members"],
  components: {
    TeamCard: TeamCard,
  },
  data() {
    return {
       Team:[
        {
        codigo : 1 ,
        nombre : 'Jurgen Orjuela' ,
        descripcion : 'leer, videojuegos, estudiar.' ,
        rol : 'Desarrollador de sofware' ,
        image : 'https://i.imgur.com/XuOvYfE.jpg'
        },
        {
        codigo : 2 ,
        nombre : 'David Turizo' ,
        descripcion : 'Leer, Musica,Tocar la guitarra.' ,
        rol : 'Ingeniero Electronico' ,
        image : 'https://i.imgur.com/j2eUbQM.jpg'
        },
        {
        codigo : 3 ,
        nombre : 'William Vargas' ,
        descripcion : 'Ver series.' ,
        rol : 'Estudiante de Ingenieria Mecatronica' ,
        image : 'https://i.imgur.com/jE7KCYY.jpg'
        },
        {
        codigo : 4 ,
        nombre : 'Daniela Laverde' ,
        descripcion : 'Leer,Crear,Ver series.' ,
        rol : 'Psicóloga' ,
        image : 'https://i.imgur.com/wPcCF2m.jpg'
        },
        {
        codigo : 5 ,
        nombre : 'Marisol Osma' ,
        descripcion : 'Dibujar,Tocar el violin.' ,
        rol : 'Estudiante de musica' ,
        image : 'https://i.imgur.com/OInkAD8.jpg'
        }
      ]
    };
  },
};
</script>