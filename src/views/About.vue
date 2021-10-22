<script setup lang="ts">
import Banner from "../components/about/Banner.vue";
import CopyUrl from "../components/common/CopyUrl.vue";
const copyUrlMsg = "了解更多资讯";
</script>

<template>
  <div class="about">
    <div class="banner-wrapper">
      <Banner></Banner>
    </div>
    <div class="copyurl-wrapper">
      <CopyUrl :msg="copyUrlMsg"></CopyUrl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 100vw;
  background-color: $backgroundColor;

  .banner-wrapper {
    width: 100vw;
    height: 580px;
    padding-bottom: 48px;
  }
  .copyurl-wrapper {
    width: 100vw;
    height: 372px;
    padding: 100px 0;
  }
}
</style>
