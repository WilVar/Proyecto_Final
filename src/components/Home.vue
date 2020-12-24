<template>
  <div>
    <Slide2 />

    <Categorias />
    
    <Productos />

    <Noticias />

  </div>
</template>

<script>
import Slideshow from './Slideshow.vue';
import Categorias from "./Categorias.vue";
import Noticias from "./Noticias.vue";
import Productos from "./Productos.vue";
import Slide2 from "./Slide2.vue";

export default {
  name: 'Home',
  components:{
    Slideshow: Slideshow,
    Categorias: Categorias,
    Noticias: Noticias,
<<<<<<< HEAD
    Equipo: Equipo,
    Slide2: Slide2,

=======
    Productos: Productos,
    Slide2: Slide2
>>>>>>> e6a4b7dec96475be98a8bf183cda126a3a11884c
  },
  data () {
    return {
      
    }
  }
}
</script>


