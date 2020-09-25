<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song
        :artist="song.artist"
        :title="song.title"
        :id="song.id"
        :img="song.img"
        :fav="song.fav"
        class="md-layout-item"
      ></card-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";
//import * as firebase from "firebase/app";

export default {
  data: function () {
    return {
      songList: [],
      favs: [],
      notdone: true,
    };
  },
  created: function () {
    console.clear();

    this.getTracks();
  },
  methods: {
    getTracks: async function () {
      this.songList.splice(0, this.songList.length);
      let ls = require("local-storage");
      let caso = ls("caso");

      let tmp = [];

      console.log("caso:" + caso);
      dataservice.getTracks(caso).then((data) => {
        // console.log(data);
        let data2;
        if (caso === "0") data2 = data.loved;
        else data2 = data.track;
        data2.forEach(function (doc) {
          tmp.push({
            id: doc.idTrack,
            artist: doc.strArtist,
            title: doc.strTrack,
            img: doc.strTrackThumb,
            fav: false,
          });
        });

        this.songList = tmp; //.slice();
      });
    },
  },
};
</script>

<style>
</style>
