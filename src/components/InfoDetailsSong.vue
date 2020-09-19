<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Dettagli</span>
      </md-toolbar>
      <md-list class="md-double-line">
      <!--<div class="md-title">Dettagli</div><br/>-->
      <md-subheader>Titolo</md-subheader>

      <md-list-item>
        <div class="md-list-item-text">
        <span>{{title}}</span>
        </div>
      </md-list-item>

      <md-divider></md-divider>
      <md-subheader>Artista</md-subheader>

      <md-list-item>
        <div class="md-list-item-text">
        <span>{{artist}}</span>
        </div>
      </md-list-item>

      <md-divider></md-divider>
      <md-subheader>Album</md-subheader>

      <md-list-item>
        <div class="md-list-item-text">
        <span>{{album}}</span>
        </div>
      </md-list-item>

      <md-divider></md-divider>
      <md-subheader>Genere</md-subheader>

      <md-list-item>
        <div class="md-list-item-text">
        <span>{{genere}}</span>
        </div>
      </md-list-item>

      <md-divider></md-divider>

      <md-list-item>
      <img :src="img">
      </md-list-item>
      </md-list>
    </div>
    <div class="md-layout-item">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Dettagli</span>
      </md-toolbar>
      <md-list class="md-double-line">
      <span>{{description}}</span>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  props: ["artist", "title", "img", "genere", "description", "album"]
}
</script>

<style lang="scss" scoped> //inserire scss
  .md-layout-item {

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>
