import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import CurrentTrendingMusic from "../pages/CurrentTrendingMusic";
import Top50MostLovedTracksAlltime from "../pages/Top50MostLovedTracksAlltime";
import Login from "../pages/Login";
import Favourites from "../pages/Favourites";
import DetailsSong from "../pages/detailsSong";
import DetailsTrend from "../pages/detailsTrend";
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
      name: "CurrentTrendingMusic",
      path: "/CurrentTrendingMusic",
      component: CurrentTrendingMusic
    },
    {
      name: "Top50MostLovedTracksAlltime",
      path: "/Top50MostLovedTracksAlltime",
      component: Top50MostLovedTracksAlltime
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
      name: "DetailsTrend",
      path: "/details/trend/:idTrend",
      component: DetailsTrend
    },
    {
      name: "Search",
      path: "/search",
      component: Search
    }
  ]
});
