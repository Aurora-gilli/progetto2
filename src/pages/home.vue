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
              <span class="md-title">The top 10 Most Loved tracks of Taylor Swift</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToTaylor()">
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
              <span class="md-title">The top 10 Most Loved tracks of One Direction</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToOneDirection()">
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
              <span class="md-title">The top 10 Most Loved tracks of Kendrick Lamar</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToKendrickLamar()">
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
              <span class="md-title">The top 10 Most Loved tracks of Katy Perry</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToKatyPerry()">
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
              <span class="md-title">The top 10 Most Loved tracks of Lady Gaga</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToLadyGaga()">
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
              <span class="md-title">The top 10 Most Loved tracks of Nicki Minaj</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToNickiMinaj()">
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
              <span class="md-title">The top 10 Most Loved tracks of Adele</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToAdele()">
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
              <span class="md-title">The top 10 Most Loved tracks of Coldplay</span>
              <span class="md-subhead">See the most loved Hit now</span>
            </md-card-header>

            <md-card-actions>
              <md-button class="md-icon-button" @click="GoToColdplay()">
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
    GoToTaylor: function() {
      this.$router.push({ path: "/Top10Taylor" });
    },
    GoToOneDirection: function() {
      this.$router.push({ path: "/Top10OneDirection" });
    },
    GoToKendrickLamar: function() {
      this.$router.push({ path: "/Top10KendrickLamar" });
    },
    GoToKatyPerry: function() {
      this.$router.push({ path: "/Top10KatyPerry" });
    },
    GoToLadyGaga: function() {
      this.$router.push({ path: "/Top10LadyGaga" });
    },
    GoToNickiMinaj: function() {
      this.$router.push({ path: "/Top10NickiMinaj" });
    },
    GoToAdele: function() {
      this.$router.push({ path: "/Top10Adele" });
    },
    GoToColdplay: function() {
      this.$router.push({ path: "/Top10Coldplay" });
    }
  }
};
</script>

<style>
.md-card {
  width: 280px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
