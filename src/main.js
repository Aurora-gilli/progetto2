//import dipendenze
import Vue from "vue";
import App from "./App";
import VueMaterial from "vue-material";
import router from "./router";

//componenti
import CardSong from "./components/CardSong";
import InfoDetailsSong from "./components/InfoDetailsSong";
import SearchDetails from "./components/SearchDetails";

//importazione degli stili
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";

//dataservice
import DataService from "./dataservice";


Vue.use(VueMaterial);
Vue.component("card-song", CardSong);
Vue.component("info-song", InfoDetailsSong);
Vue.component("search-details", SearchDetails);

Vue.config.productionTip = false;

//se l'utente non ha mai effettuato l'accesso, allora viene reindirizzato alla pagina di login
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !DataService.isAuthenticated()) {
    next({ name: "Login" });
  } else {
    next();
  }
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
