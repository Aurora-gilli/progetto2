<template>
  <div class="page-container">
    <md-app md-mode="fixed" style="min-height: 100vh;">
      <md-app-toolbar>
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Classifiche musicali</span>
        <div class="md-toolbar-section-end" v-if="authenticated">
          <md-button class="md-icon-button" @click="logout()">
            <md-icon>forward</md-icon>
          </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item @click="GoToHome()">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="GoToSearch()">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Search</span>
          </md-list-item>

          <md-list-item @click="GoToFavourites()">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Favourites</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import DataService from "./dataservice";
const firebase = require('../node_modules/firebase')

export default {
  name: "App",
  data: function() {
    return {
      authenticated: DataService.isAuthenticated(),
      menuVisible: false
    };
  },
  watch: {
    $route: function() {
      this.authenticated = DataService.isAuthenticated();
    }
  },
  created() {

 // let firebase = require('firebase/app');
   let configOptions = {
      apiKey: "AIzaSyAwzS3vLAK7e32di78bHmVsDbduooXo7DE",
      authDomain: "progettoclassifiche.firebaseapp.com",
      databaseURL: "https://progettoclassifiche.firebaseio.com",
      projectId: "progettoclassifiche",
      storageBucket: "progettoclassifiche.appspot.com",
      messagingSenderId: "592011648722",
      appId: "1:592011648722:web:751df09f9026e40359d70b"
    };
    firebase.default.initializeApp(configOptions);
  },
  //components: {},
  methods: {
    logout: function() {
      this.menuVisible=false;
      DataService.logout();
      this.$router.push({ path: "/login" });
    },
    GoToHome: function() {
      this.menuVisible=false;
      this.$router.push({ path: "/home" });
    },
    GoToFavourites: function() {
      this.menuVisible=false;
      this.$router.push({ path: "/favourites" });
    },
    GoToSearch: function() {
      this.menuVisible=false;
      this.$router.push({ path: "/search" });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
