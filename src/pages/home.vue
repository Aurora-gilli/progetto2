<template>
  <div class="md-layout md-gutter">
    <!--qui ci andranno le card con le tre playlist di default -->
    <div class="md-layout-item">
      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="1:1">
            <img src="/assets/examples/card-sky.jpg" alt="Background 1">
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">50 Most loved</span>
              <span class="md-subhead">See the most loved songs of all time</span>
            </md-card-header>

            <md-card-actions>
              <!--<md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>-->

              <md-button class="md-icon-button" @click="GoTo50MostLoved()">
                <md-icon>launch</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>

    <div class="md-layout-item">
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
              <!--<md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>-->

              <md-button class="md-icon-button" @click="GoTo10Albums()">
                <md-icon>launch</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>

    <div class="md-layout-item">
      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="1:1">
            <img src="/assets/examples/card-sky.jpg" alt="Background 1">
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">Current Trending Music</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <!--<md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>-->

              <md-button class="md-icon-button" @click="GoToTrends()">
                <md-icon>launch</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    GoTo50MostLoved: function() {
      this.$router.push({ path: "/Top50MostLovedTracksAlltime" });
    },
    GoTo10Albums: function() {
      this.$router.push({ path: "/Top10MostLovedAlbumsAlltime" });
    },
    GoToTrends: function() {
      this.$router.push({ path: "/CurrentTrendingMusic" });
    }
  }
}
</script>

<style>
.md-card {
  width: 280px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
