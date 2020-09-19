<template>
  <div>
    <div>
      <info-details :title="songDetail.strTrack" :artist="songDetail.strArtist" :album="songDetail.strAlbum" :id="songDetail.idTrack" :img="songDetail.strTrackThumb" :description="songDetail.strDescriptionEN" :genere="songDetail.strGenre"></info-details>
    </div>
  </div>
</template>
<!--{
  id: data.idTrack, //doc risulta undefine
  artist: data.strArtist,
  album: data.strAlbum,
  title: data.strTrack,
  img: data.strTrackThumb,
  description: data.strDescriptionEN,
  genere: data.strGenre
}-->
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
