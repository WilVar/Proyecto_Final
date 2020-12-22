<template>
  <div id="demo" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://imgur.com/8m56Tzv.jpg" alt="Los Angeles" width="100%" height="auto" />
        <div class="carousel-caption">
          <h2>PROGRAMA EN PYTHON</h2>
          <p>Aprende a programar hoy mismo!</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://imgur.com/5sgfj3c.jpg" alt="Chicago" width="auto" height="auto" />
        <div class="carousel-caption">
          <h2>PROGRAMA EN JAVA</h2>
          <p>Aprende a programar hoy mismo!</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Slideshow",
  props: ["images"],
};
</script>