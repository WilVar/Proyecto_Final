<template>
  <div class="container-fluid  " style="background-color: #F7F6F3">
    <nav
      class="navbar navbar-expand-sm navbar-dark  justify-content-end"
      style="background-color: #133664"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link tag="li" to="/" exact>
            <a class="nav-link">Inicio</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/servicios">
            <a class="nav-link">Servicios</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/noticias">
            <a class="nav-link">Noticias</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/equipo">
            <a class="nav-link">Equipo</a>
          </router-link>
        </li>
        <div v-if="this.auth == null">
          <li class="nav-item">
            <router-link tag="li" to="/login">
              <a class="nav-link">Login</a>
            </router-link>
          </li>
        </div>
        <div v-if="this.auth == null">
          <li class="nav-item">
            <router-link tag="li" to="/register">
              <a class="nav-link">Register</a>
            </router-link>
          </li>
        </div>
        <div v-else>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="logOut">LogOut</a>
          </li>
        </div>
      </ul>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Footer: Footer,
  },
  data() {
    return {
      auth: null,
    };
  },
  created() {
    this.auth = localStorage.getItem("auth");
  },
  updated() {
    this.auth = localStorage.getItem("auth");
  },
  methods: {
    logOut() {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      this.$forceUpdate();
    },
  },
};
</script>

