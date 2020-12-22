<template>
  <div>
    <Slideshow />

    <Servicios/>

    <Noticias/>

    <Equipo/>

  </div>
</template>

<script>
import Slideshow from './Slideshow.vue';
import Servicios from "./Servicios.vue";
import Noticias from "./Noticias.vue";
import Equipo from "./Equipo.vue";
export default {
  name: 'Home',
  components:{
    Slideshow: Slideshow,
    Servicios: Servicios,
    Noticias: Noticias,
    Equipo: Equipo,
  },
  data () {
    return {
      
    }
  }
}
</script>


