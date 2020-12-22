import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Servicios from '../components/Servicios.vue';
import Noticias from '../components/Noticias.vue';
import Equipo from '../components/Equipo.vue';
import Login from '../components/Login.vue';

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
      path: '/equipo',
      name: 'Team',
      component: Equipo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
