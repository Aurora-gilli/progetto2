<template>
  <div>
    <form class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Pagina di ricerca</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field

              >
                <label>Title</label>
                <md-input v-model="selectedTitle"></md-input>

              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field

              >
                <label>Artist</label>
                <md-input v-model="selectedArtist"></md-input>

              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button @click.prevent
                     @click="search(selectedTitle,selectedArtist)" class="md-primary">Cerca</md-button>
         <!-- <md-button @click.prevent
                     @click="test()" class="md-primary">Debug</md-button>  -->
        </md-card-actions>
      </md-card>
      <md-empty-state v-if="empty"
          md-rounded
          md-icon="access_time"
          md-label="test"
          md-description="DA CAMBIARE">
      </md-empty-state>

    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selectedTitle: null,
      selectedArtist: null,
      searchOptions: null,
      empty: false

    };
  },
  methods: {
    search(title,artist) {
      console.clear();
      if (!title && !artist) {
        return new Promise((resolve) => {
          resolve([]);
        });
      }
      const axios = require("axios");
      let self=this;

      axios({
        "method":"GET",
        "url":"https://theaudiodb.p.rapidapi.com/searchtrack.php",
        "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
          "x-rapidapi-key": "2635c8007fmsh73392922060cd46p142163jsnac8c6899ba87",
          "useQueryString":true
        },"params":{
          "t":title,
          "s":artist
        }
        }).then((result) => {

          if(result.data.track != null){
            self.searchOptions= result.data.track[0];
            self.$forceUpdate();
            self.$router.push({path:"/details/"+self.searchOptions.idTrack});
          }
          else
          {
            self.empty=true;
            self.$forceUpdate();
          }
        })
      },
      test()
        {
        this.$forceUpdate()
        },
        passToCard: function ()
        {return this.searched}
    }
  };
</script>
