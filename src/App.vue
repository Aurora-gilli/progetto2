<template>
  <div class="page-container">
    <md-app>
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
  components: {},
  methods: {
    logout: function() {
      DataService.logout();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style>
</style>
