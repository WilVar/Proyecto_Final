<template>
  <carousel :data="data"></carousel>
</template>

<script>
import IM1 from '../assets/imp1.jpg';
import IM2 from '../assets/img2.png';
import IM3 from '../assets/img3.jpg';
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide"><img src="'+IM2+'" width="70%" height="70%"/></div>',
          '<div class="example-slide">Tenemos personal altamente calificado<img src="'+IM1+'" width="70%" height="70%"/></div>',
          '<div class="example-slide"><img src="'+IM3+'" width="70%" height="70%"/>Te damos garantía y soporte</div>',
        ],
      };
    },
  };
</script>

<style>
  .example-slide {
    align-items: center;
    background-color:  #F7F6F3;
    color:#133664;
    display: flex;
    font:oblique;
    font-size:3rem;
    text-align: center;
    justify-content: center;
    min-height: 10rem;
  }
</style>