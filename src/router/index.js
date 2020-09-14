import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home';
import elencoTopTracks from '../pages/elencoTopTracks';
import Login from '../pages/Login';

import DataService from '../dataservice';


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/Home',
      component: Home
    },
    {
      name: 'default',
      path: '/',
      redirect: '/Home'
    },
    {
      name: 'elencoTopTracks',
      path: '/elencoTopTracks',
      component: elencoTopTracks
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !DataService.isAuthenticated() ) {
    next({name: 'Login'});
  } else {
    next();
  }
})
