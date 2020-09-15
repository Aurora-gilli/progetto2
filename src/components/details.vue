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
  export default {
    name: 'LayoutHorizontalGutter'
  }
</script>

<style lang="scss" scoped> //inserire scss
  @import "~vue-material/theme/engine";

  .md-layout-item {

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
</style>
