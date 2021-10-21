<template>
  <div class="banner">
    <video
      src="/videos/home-banner.mp4"
      autoplay
      muted
      loop
      playsinline="true"
      preload="auto"
    ></video>
    <img src="/images/home/mask@2x.png" alt="mask" class="mask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Banner",
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  height: 800px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100vw;
    height: 800px;
    position: absolute;
  }
  .mask {
    width: 100%;
    height: 289px;
    position: absolute;
    bottom: 0;
  }
}
</style>
