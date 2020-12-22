<template>
  <div>
    <div class="container-fluid1" style="text-align: center;">
      <div class="col" style="text-align: center;">
        <h1 style="font-size: 50px; text-align: center; font-family: verdana;margin-top:10%">
          <b>Noticias Tecnológicas</b>
        </h1>
      </div>

      <div class="row" v-if="this.news">
        <NewsCard :News="this.news[0]" />
        <NewsCard :News="this.news[1]" />
      </div>

      <div class="row" v-if="this.news">
        <NewsCard :News="this.news[2]" />
        <NewsCard :News="this.news[3]" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";
import axios from "axios";
import "../assets/css/noticias.css";

export default {
  name: "Noticias",
  components: {
    NewsCard: NewsCard,
  },
  data() {
    return {
      news: null,
    };
  },
  created() {
    var url =
      "http://newsapi.org/v2/top-headlines?country=co&category=technology&" +
      "apiKey=5906a69cc8a74e448d4ff1df3e1da6ca";
    axios.get(url).then((res) => {
      this.news = res.data.articles;
      console.log("this.news", this.news[0]);
    });
    console.log("beforeCreate", this.news);
  },
};
</script>