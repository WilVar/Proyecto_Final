import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Servicios from '../components/Servicios.vue';
import Noticias from '../components/Noticias.vue';
import Equipo from '../components/Equipo.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Usuarios from '../components/Usuarios.vue';
import Categorias from '../components/Categorias.vue';
import Articulos from '../components/Articulos.vue';
import Formulario from '../components/Formulario.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/servicios',
      name: 'Services',
      component: Servicios
    },
    {
      path: '/noticias',
      name: 'News',
      component: Noticias
    },
    {
      path: '/productos',
      name: 'Products',
      component: Equipo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/formulario',
      name: 'Formulario',
      component: Formulario
    },
    {
      path: '/usuarios',
      name: 'Users',
      component: Usuarios
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    },
    {
      path: '/articulos',
      name: 'Articulos',
      component: Articulos
    },
    
  ]
})
