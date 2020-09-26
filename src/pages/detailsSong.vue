<template>
  <div>
    <div>
      <info-song
        :title="songDetail.strTrack"
        :artist="songDetail.strArtist"
        :album="songDetail.strAlbum"
        :id="songDetail.idTrack"
        :img="songDetail.strTrackThumb"
        :description="songDetail.strDescriptionEN"
        :genere="songDetail.strGenre"
        :fav="songDetail.fav"
      ></info-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";
//const firebase = require("../../node_modules/firebase");

export default {
  data: function () {
    return {
      songDetail: [],
      favs: false,
    };
  },
  created: function () {
    dataservice.getDetailsSong(this.$route.params.idTrack).then((data) => {
      this.songDetail = data.track.pop();
      this.songDetail.fav = this.$route.params.fav === "true";
    });
  },
};
</script>

<style>
</style>
