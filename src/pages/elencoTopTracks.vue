<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>Posizione</md-table-head>
        <md-table-head>Nome</md-table-head>
      </md-table-row>

      <div v-for"track in tracks" :key="track.name"> //questa la prende come errore//
      <md-table-row>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>{{track.name}}</md-table-cell>
      </md-table-row>
      </div>
    </md-table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tracks: []
    }
  }
}
</script>

<style>

</style>
