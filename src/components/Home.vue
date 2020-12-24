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
    Productos: Productos,
    Slide2: Slide2

  },
  data () {
    return {
      
    }
  }
}
</script>


