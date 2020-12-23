<template>
  <div class="container-fluid  " style="background-color: #F7F6F3">
    <nav
      class="navbar navbar-expand-sm navbar-dark  justify-content-end"
      style="background-color: #133664"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link tag="li" to="/" exact>
            <a class="nav-link">Inicio </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/categorias">
            <a class="nav-link">Categorias</a>

          </router-link>
        </li>
         <li class="nav-item">
          <router-link tag="li" to="/productos">
            <a class="nav-link">Productos</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" to="/noticias">
            <a class="nav-link">Noticias</a>
          </router-link>
        </li>
        <div v-if="this.isAdmin">
          <li class="nav-item">
            <router-link tag="li" to="/usuarios">
              <a class="nav-link">Usuarios</a>
            </router-link>
          </li>
        </div>
        <div v-if="this.auth == null">
          <li class="nav-item">
            <router-link tag="li" to="/login">
              <a class="nav-link">Iniciar Sesión </a>
            </router-link>
          </li>
        </div>
        <div v-if="this.auth == null">
          <li class="nav-item">
            <router-link tag="li" to="/register">
              <a class="nav-link">Registrarse </a>
            </router-link>
          </li>
        </div>
        <div v-else>
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="logOut">Salir </a>
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
      user: null,
      isAdmin: false
    };
  },
  created() {
    this.loadProps();
  },
  updated() {
    this.loadProps();
  },
  methods: {
    logOut() {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
       this.$router.push("/");
      this.$forceUpdate();
    },
    loadProps() {
      this.auth = localStorage.getItem("auth");
      this.user = localStorage.getItem("user");
      if (this.user) {
        this.user = JSON.parse(this.user);
        console.log("this.user",this.user.rol)
        if(this.user.rol == "Administrador"){
          this.isAdmin = true;
        }else{
          this.isAdmin = false;
        }
      }else{
        this.isAdmin = false
      }
    },
  },
};
</script>

