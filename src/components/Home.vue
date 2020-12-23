<template>
  <div>
    <Slide2 />

    <Servicios/>
    
    <Equipo/>

    <Noticias/>

  </div>
</template>

<script>
import Slideshow from './Slideshow.vue';
import Servicios from "./Servicios.vue";
import Noticias from "./Noticias.vue";
import Equipo from "./Equipo.vue";
import Slide2 from "./Slide2.vue";
export default {
  name: 'Home',
  components:{
    Slideshow: Slideshow,
    Servicios: Servicios,
    Noticias: Noticias,
    Equipo: Equipo,
    Slide2: Slide2
  },
  data () {
    return {
      
    }
  }
}
</script>


