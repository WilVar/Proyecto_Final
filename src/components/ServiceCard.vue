<template>
  <div class="col serviceColum">
    <img
      class="img-fluid mx-auto d-block serviceImg "
      :src="this.image"
      alt="Servicio"
    />
    <h2 style="text-align: center;">{{this.name}}</h2>
    <h5 style="text-align: justify;">{{this.description}}</h5>
    
    
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
          
      }
  },
  created(){
    this.name = this.service.nombre;
    this.description = this.service.descripcion;
    this.image = this.service.url;
  }

};
</script>