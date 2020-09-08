//import dipendenze
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import router from './router'

//importazione degli stili
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

//dataservice
//import DataService from './dataservice';

Vue.use(VueMaterial);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
