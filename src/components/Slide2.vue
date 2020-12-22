<template>
  <carousel :data="data"></carousel>
</template>

<script>
import Java from '../assets/java.png';
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide"><img src="'+Java+'" width="100" height="100"/></div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>