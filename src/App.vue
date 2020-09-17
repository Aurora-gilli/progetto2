<template>
  <!--<div>
    <div v-for="" :key="">
      <menu :artist="song.artist" :title="song.title" :id="song.id"></menu>
    </div>
  </div>-->
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar>
        <div>
          <span class="md-title">Classifiche musicali</span>
        </div>
        <div class="md-toolbar-section-end" v-if="authenticated">
          <md-button class="md-icon-button" @click="logout()">
            <md-icon>forward</md-icon>
          </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item @click="GoToHome()">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="GoTo50MostLoved()">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">50 of All time</span>
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

export default {
  name: "App",
  /*
  data: function() {
    return {
      navLink: []
    };
  }
  */
  data: function() {
    return {
      authenticated: DataService.isAuthenticated()
    };
  },
  watch: {
    $route: function() {
      this.authenticated = DataService.isAuthenticated();
    }
  },
  //components: {},
  methods: {
    logout: function() {
      DataService.logout();
      this.$router.push({ path: "/login" });
    },
    GoTo50MostLoved: function() {
      this.$router.push({ path: "/Top50MostLovedTracksAlltime" });
    },
    GoToHome: function() {
      this.$router.push({ path: "/home" });
    },
    GoToFavourites: function() {
      this.$router.push({ path: "/favourites" });
    }
  }
};
</script>

<style>
.md-drawer {
  width: 250px;
}
</style>
