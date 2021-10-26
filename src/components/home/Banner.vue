<template>
  <div class="banner">
    <video src="/videos/home-banner.mp4" autoplay muted loop playsinline="true" preload="auto"></video>
    <div class="content">
      <div class="title">小绘，设计突破想象</div>
      <div class="description">突破想象的图形设计工具集，使用AI生成技术帮助你轻松搞定设计工作</div>
    </div>
    <img src="/images/home/mask@2x.png" alt="mask" class="mask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  name: 'Banner',
});
</script>

<style lang="scss" scoped>
.banner {
  width: 375px;
  height: 800px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 375px;
    position: absolute;
  }

  .content {
    position: absolute;
    top: 380px;
    left: 30px;
    width: 180px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    z-index: 10;

    .title {
      width: 180px;
      height: 80px;
      font-size: 30px;
      font-weight: bold;
      line-height: 40px;
      color: #ffffff;
    }

    .description {
      width: 180px;
      height: 63px;
      font-size: 16px;
      line-height: 21px;
      color: #ffffff;
      opacity: 0.8;
    }
  }

  .mask {
    width: 375px;
    height: 289px;
    position: absolute;
    bottom: 0;
  }
}
</style>
