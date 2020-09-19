<!--The top 10 Most Loved Albums of Alltime-->
<template>
  <div class="md-layout md-gutter">
    <div v-for="song in songList" :key="song.id">
      <card-album :artist="song.artist" :title="song.title" :id="song.id" :img="song.img" class="md-layout-item"></card-album>
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
    this.getAlbums();
  },
  methods: {
    getAlbums: function() {
      this.songList.splice(0, this.songList.length);

      var tmp = [];

      dataservice.getAlbums().then((data) => {
        data.loved.forEach(function(doc) {
          tmp.push({
            id: doc.idAlbum,
            artist: doc.strArtist,
            title: doc.strAlbum,
            img: doc.strAlbumThumb
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
