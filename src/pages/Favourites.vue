<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song
        :artist="song.strArtist"
        :title="song.strTrack"
        :id="song.idTrack"
        :img="song.strTrackThumb"
        :fav="true"
        class="md-layout-item"
      ></card-song>
    </div>
    <md-empty-state
      v-if="emptyState"
      md-rounded
      md-icon="favorite"
      md-label="Nothing here yet"
      md-description="Go to search to find the song you want or visit the discover page"
    >
    </md-empty-state>
  </div>
</template>

<script>
import "@firebase/app";
import firebase from "@firebase/app";
import "@firebase/firestore";
import dataservice from "../dataservice";

export default {
  name: "EmptyStateRounded",
  data: function () {
    return {
      songList: [],
      emptyState: false,
    };
  },
  created: function () {
    console.clear();

    this.myFavorites();
  },
  methods: {
    myFavorites() {
      let self = this;
      let db = firebase.firestore();

      let ls = require("local-storage");

      db.collection(ls("username"))
        .get()
        .then(function (doc) {
          //console.log(doc);
          if (!doc.empty) {
            let favs = doc.docs.map((doc) => doc.id);
            favs.forEach((el) => {
              console.log(el);
              dataservice.getDetailsSong(el).then((data) => {
                self.songList.push(data.track.pop());
                console.log(self.songList);
              });
            });
          } else {
            console.log("No songs");
            self.emptyState = true;
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });

      // this.$forceUpdate()
    },
  },
};
</script>

<style>
</style>
