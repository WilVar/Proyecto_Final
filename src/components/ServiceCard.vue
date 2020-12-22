<template>
  <div class="col serviceColum">
    <img
      class="img-fluid mx-auto d-block serviceImg "
      :src="this.image"
      alt="Servicio"
    />
    <h2 style="text-align: center;">{{this.name}}</h2>
    <h5 style="text-align: justify;">{{this.description}}</h5>
    <h6 style="text-align: center;">Ingresa al curso <a :href="this.myUrl" target="blank"><b>aquí</b> </a></h6>
    
  </div>
  
</template>

<script>
export default {
  name: "ServiceCard",
  props: ["service"],
  data() {
      return{
          name: "",
          description: "",
          image: "",
          myUrl: "",
      }
  },
  created(){
    this.name = this.service.name;
    this.description = this.service.description;
    this.image = this.service.image;
    this.myUrl = this.service.myUrl;
  }

};
</script>