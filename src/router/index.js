import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'

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
  ]
})
