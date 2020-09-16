<template>
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">Classifiche musicali</span>
          <div class="md-toolbar-section-end" v-if="authenticated">
            <md-button class="md-icon-button" @click="logout()">
              <md-icon>forward</md-icon>
            </md-button>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">

          <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-button class="md-icon-button" @click="gotonavigation()">
              <md-icon>{{icon}}</md-icon>
              <span class="md-list-item-text">{{text}}</span>
            </md-button>
          </md-list-item>

        </md-app-drawer>

        <md-app-content>
        <router-view></router-view>
        </md-app-content>
      </md-app>
    </div>
</template>

<script>
  export default {
    name: 'PersistentFull',
    props:[],
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style>
</style>
