<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img src="/assets/examples/card-sky.jpg" alt="Background 1">
      </md-card-media>

      <md-card-area>
        <md-card-header>
          <span class="md-title">Most loved albums</span>
          <span class="md-subhead">See the most loved albums of all time</span>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>
export default {};
</script>

<style>
.md-card {
  width: 280px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
