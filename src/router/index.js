import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Categorias from '../components/Categorias.vue';
import Noticias from '../components/Noticias.vue';
import Productos from '../components/Productos.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Usuarios from '../components/Usuarios.vue';

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
      path: '/categorias',
      name: 'categories',
      component: Categorias,
    },
    {
      path: '/noticias',
      name: 'News',
      component: Noticias,
    },
    {
      path: '/productos',
      name: 'Products',
      component: Productos,
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
      path: '/usuarios',
      name: 'Users',
      component: Usuarios
    },
  ]
})
