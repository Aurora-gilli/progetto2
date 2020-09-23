<template>
  <div>
    <div>
      <info-trend
        :title="songDetail.strTrack"
        :artist="songDetail.strArtist"
        :album="songDetail.strAlbum"
        :id="songDetail.idTrend"
        :img="songDetail.strTrackThumb"
        :description="songDetail.strDescriptionEN"
        :genere="songDetail.strGenre"
      ></info-trend>
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
    dataservice.getDetailsSong(this.$route.params.idTrend).then((data) => {
      this.songDetail = data.track.pop();
    });
  }
}
</script>

<style>
</style>
