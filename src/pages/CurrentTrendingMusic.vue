<!--Current trending music-->
<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-song :artist="song.artist" :title="song.title" :id="song.id" :img="song.img" class="md-layout-item"></card-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";

export default {
  data: function() {
    return {
      songList: []
    }
  },
  created: function() {
    this.getCurrentTrending();
  },
  methods: {
    getCurrentTrending: function() {
      this.songList.splice(0, this.songList.length);

      var tmp = [];

      dataservice.getCurrentTrending().then((data) => {
        data.trending.forEach(function(doc) {
          tmp.push({
            id: doc.idTrend,
            artist: doc.strArtist,
            title: doc.strTrack,
            album: doc.strAlbum
          });
        });

        this.songList = tmp.slice();
      });
    }
  }
}
</script>

<style>
</style>
