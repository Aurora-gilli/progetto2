<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">Info tipo artist e title</div>
    <div class="md-layout-item">descrizione/testo</div>
  </div>
</template>
<!--md-[breakpoint]-size-[amount]',
description: 'sets a size to a particular item for a particular breakpoint.
the breakpoints follow the material design guidelines for layout. the possible values are:
xsmall
small
medium
large
xlarge -->
<script>
import dataservice from "../dataservice";

export default {
  name: 'LayoutHorizontalGutter',
  created: function() {
    var tmp = {};
    dataservice.getDetailsSong(this.$route.params.idTrack).then((data) => {
      tmp = data.track.pop();
      console.log(tmp)
      /*data.track.forEach(function(doc) {
        console.log(doc)
      });*/
    })
  }
}
</script>

<style lang="scss" scoped> //inserire scss
  .md-layout-item {

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>
