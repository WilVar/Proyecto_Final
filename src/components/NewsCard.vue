<template>
    <div class="col col-lg-5 newsColum" style="text-align: center; padding: 2%; width:46%">
      <h4 class= "newstittle">{{ this.title }}</h4>
      <p>{{ this.description }}</p>
      <a :href="this.url" target="blank"><img class="imagenNew" :src="this.imagen" alt="imagennew"></a>

      <a :href="this.url" target="blank"><button type="button" class="btn btn" style="background-color:#16C1DE"><span>Ver fuente </span></button></a>
      
    </div>
  
</template>
<script>
export default {
  name: "NewsCard",
  props: ["News"],
  data() {
    return {
      title: "",
      description: "",
      url: "#",
      imagen: "",
    };
  },
  created() {
    
    this.title = this.News.title;
    this.description = this.News.description;
    this.url = this.News.url;
    this.imagen= this.News.urlToImage;

  },
};
</script>
