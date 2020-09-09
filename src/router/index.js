import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'

/* import DataService from '../dataservice';

import Login from '../pages/Login'; */

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
    }
/*    {
      name: 'Login',
      path: '/login',
      component: Login
    }*/
  ]
});

/* router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && !DataService.isAuthenticated() ) {
    next({name: 'Login'});
  } else {
    next();
  }
})*/
