<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{title}}</div>
          <div class="md-subhead">{{artist}}</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img :src="img">
        </md-card-media>

        <md-card-actions>
          <md-button class="md-icon-button" :to="'/details/' + id">
            <md-icon>open_in_new</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["artist", "title", "id", "img"]
}
</script>

<style>
</style>
