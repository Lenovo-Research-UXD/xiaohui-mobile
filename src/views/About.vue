<script setup lang="ts">
import Banner from "../components/about/Banner.vue";
import History from "../components/about/History.vue";
import Contact from "../components/about/Contact.vue";
import CopyUrl from "../components/common/CopyUrl.vue";
const copyUrlMsg = "了解更多资讯";
</script>

<template>
  <div class="about">
    <div class="banner-wrapper">
      <Banner></Banner>
    </div>
    <div class="history-wrapper">
      <History></History>
    </div>
    <div class="contact-wrapper">
      <Contact></Contact>
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

  .history-wrapper {
    width: 100vw;
    height: 1830px;
    padding: 0 48px 100px 30px;
  }

  .contact-wrapper {
    width: 100vw;
    height: 160px;
    padding: 0 30px;
  }
  .copyurl-wrapper {
    width: 100vw;
    height: 372px;
    padding: 100px 0;
  }
}
</style>
