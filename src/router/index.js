import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
//import ElencoTopTracks from "../pages/elencoTopTracks";
import Login from "../pages/Login";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home
    },
    {
      name: "default",
      path: "/",
      redirect: "/home"
    },
    /*{
      name: "elencoTopTracks",
      path: "/elencoTopTracks",
      component: ElencoTopTracks
    }*/,
    {
      name: "Login",
      path: "/login",
      component: Login
    }
  ]
});
