<template>
  <div>
    <div>
      <info-details></info-details>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalGutter'
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
