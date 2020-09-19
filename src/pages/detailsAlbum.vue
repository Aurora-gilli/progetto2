<template>
  <div>
    <div>
      <info-album
        :title="albumDetail.strAlbum"
        :artist="albumDetail.strArtist"
        :year="albumDetail.intYearReleased"
        :id="albumDetail.idAlbum"
        :img="albumDetail.strAlbumThumb"
        :description="albumDetail.strDescriptionEN"
        :genere="albumDetail.strGenre"
      ></info-album>
    </div>
  </div>
</template>

<script>
import dataservice from "../dataservice";

export default {
  data: function() {
    return {
      albumDetail: []
    }
  },
  created: function() {
    dataservice.getDetailsAlbum(this.$route.params.idAlbum).then((data) => {
      this.albumDetail = data.album.pop();
    });
  }
}
</script>

<style>
</style>
