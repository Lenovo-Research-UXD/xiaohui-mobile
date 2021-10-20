<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="video-intro">
      <video src="/videos/home-banner.mp4" autoplay muted loop></video>
      <img src="/images/home/mask@2x.png" alt="mask" class="mask" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 1000px;
  background: rgba(245, 245, 245, 1);

  .video-intro {
    width: 100vw;
    height: 800px;
    position: relative;
  }
  video {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .mask {
    z-index: 100;
    width: 100%;
    height: 289px;
    position: absolute;
    bottom: 0;
  }
}
</style>
