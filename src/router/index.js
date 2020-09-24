import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import Top50MostLovedTracksAlltime from "../pages/Top50MostLovedTracksAlltime";
import Top10Taylor from "../pages/Top10Taylor";
import Top10OneDirection from "../pages/Top10OneDirection";
import Top10KendrickLamar from "../pages/Top10KendrickLamar";
import Top10KatyPerry from "../pages/Top10KatyPerry";
import Top10LadyGaga from "../pages/Top10LadyGaga";
import Top10NickiMinaj from "../pages/Top10NickiMinaj";
import Top10Adele from "../pages/Top10Adele";
import Top10Coldplay from "../pages/Top10Coldplay";
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
      name: "Top10Taylor",
      path: "/Top10Taylor",
      component: Top10Taylor
    },
    {
      name: "Top10OneDirection",
      path: "/Top10OneDirection",
      component: Top10OneDirection
    },
    {
      name: "Top10KendrickLamar",
      path: "/Top10KendrickLamar",
      component: Top10KendrickLamar
    },
    {
      name: "Top10KatyPerry",
      path: "/Top10KatyPerry",
      component: Top10KatyPerry
    },
    {
      name: "Top10LadyGaga",
      path: "/Top10LadyGaga",
      component: Top10LadyGaga
    },
    {
      name: "Top10NickiMinaj",
      path: "/Top10NickiMinaj",
      component: Top10NickiMinaj
    },
    {
      name: "Top10Adele",
      path: "/Top10Adele",
      component: Top10Adele
    },
    {
      name: "Top10Coldplay",
      path: "/Top10Coldplay",
      component: Top10Coldplay
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
      name: "Search",
      path: "/search",
      component: Search
    }
  ]
});
