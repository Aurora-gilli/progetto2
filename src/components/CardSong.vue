<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{title}}</div>
          <div class="md-subhead">{{artist}}</div>
        </md-card-header-text>
        <md-card-actions>
          <md-button class="md-icon-button" @click="gotodetails()"> <!-- funzione goto da definire per mandare sulla pagina del dettaglio canzone, passare l'id della traccia localhost/detail/idTrack-->
            <md-icon>open_in_new</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["artist", "title", "id"]
};
</script>

<style>
</style>
