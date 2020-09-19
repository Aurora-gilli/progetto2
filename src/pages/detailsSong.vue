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
      ></info-song>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";

export default {
  data: function() {
    return {
      songDetail: []
    }
  },
  created: function() {
    dataservice.getDetailsSong(this.$route.params.idTrack).then((data) => {
      this.songDetail = data.track.pop();
    });
  }
}
</script>

<style>
</style>
