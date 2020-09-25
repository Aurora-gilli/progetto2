import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import Playlists from "../pages/Playlists";
import Login from "../pages/Login";
import Favourites from "../pages/Favourites";
import DetailsSong from "../pages/detailsSong";
import Search from "../pages/Search";

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
    {
      name: "Playlists",
      path: "/Playlists",
      component: Playlists
    },
    {
      name: "Login",
      path: "/login",
      component: Login
    },
    {
      name: "Favourites",
      path: "/favourites",
      component: Favourites
    },
    {
      name: "DetailsSong",
      path: "/details/:idTrack",
      component: DetailsSong
    },
    {
      name: "Search",
      path: "/search",
      component: Search
    }
  ]
});
