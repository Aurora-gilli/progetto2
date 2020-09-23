<template>
  <div>
    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img :src="img">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{title}}</span>
            <span class="md-subhead">{{artist}}</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button" :to="'/details/trend/' + id">
              <md-icon>open_in_new</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
   name: 'MediaCover',
  props: ["artist", "title", "id", "img"]
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
