<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song :artist="song.artist" :title="song.title" :id="song.id" :img="song.img" :fav="song.fav" class="md-layout-item"></card-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";
const firebase = require('../../node_modules/firebase')

export default {
  data: function() {
    return {
      songList: [],
      favs:[]

    }
  },
  created: function() {
    console.clear();

    this.getTracks();
    this.myFavorites();

  },
  methods: {
    getTracks: function() {
      this.songList.splice(0, this.songList.length);
      let ls = require('local-storage')
      let caso = ls('caso')
      let tmp = [];
      console.log("caso:"+caso)
      dataservice.getTracks(caso).then((data) => {
        console.log(data)
        let data2;
        if(caso==='0')
          data2=data.loved;
        else
          data2=data.track;
        data2.forEach(function(doc) {
          tmp.push({
            id: doc.idTrack,
            artist: doc.strArtist,
            title: doc.strTrack,
            img: doc.strTrackThumb,
            fav:false
          });
        });

        this.songList = tmp//.slice();
      });
    },
    myFavorites() {
      let self = this;
      let db = firebase.firestore();

      db.collection("favorites").get().then(function (doc) {
        //console.log(doc);
        if (!doc.empty) {
          self.favs = doc.docs.map(doc => doc.data());
          self.songList.forEach((element)=> {
            // eslint-disable-next-line no-prototype-builtins
            if(self.favs.hasOwnProperty(element.id))
            {
              self.songList[element.id].fav = true;
            }
            else {
              self.songList[element.id].fav = true;
            }

            })

        } else {
          console.log("No songs");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

      // this.$forceUpdate()
    }
  }
}
</script>

<style>
</style>
