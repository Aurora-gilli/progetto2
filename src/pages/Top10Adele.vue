<!--The top 10 Most Loved Tracks of Adele-->
<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song
        :artist="song.artist"
        :title="song.title"
        :id="song.id"
        :img="song.img"
        class="md-layout-item"
      ></card-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";

export default {
  data: function() {
    return {
      songList: []
    };
  },
  created: function() {
    this.getTopAdele();
  },
  methods: {
    getTopAdele: function() {
      this.songList.splice(0, this.songList.length);

      var tmp = [];

      dataservice.getTopAdele().then(data => {
        data.track.forEach(function(doc) {
          tmp.push({
            id: doc.idTrack,
            artist: doc.strArtist,
            title: doc.strTrack,
            img: doc.strTrackThumb
          });
        });

        this.songList = tmp.slice();
      });
    }
  }
};
</script>

<style>
</style>
