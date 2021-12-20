<template>
  <div class="banner">
    <div class="loading" ref="loading" v-show="state.isLoading"></div>
    <video
      class="banner-video"
      v-if="isIOSorChrome()"
      src="/videos/home-banner.mp4"
      poster="/images/home/cover-intro@2x.png"
      autoplay
      muted
      loop
      playsinline="true"
      webkit-playsinline="true"
      x5-video-player-type="h5"
      preload="true"
      ref="introVideo"
    ></video>
    <img class="banner-image" src="/images/home/cover-intro@2x.png" alt="banner" v-else />
    <!-- <canvas ref="canvas" id="video-to-canvas"></canvas> -->
    <div class="content">
      <div class="title">小绘，设计突破想象</div>
      <div class="description">突破想象的图形设计工具集，使用AI生成技术帮助你轻松搞定设计工作</div>
    </div>
    <img src="/images/home/mask@2x.png" alt="mask" class="mask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, watchEffect } from '@vue/runtime-core';
import { onMounted, reactive, ref, watch } from 'vue';
import lottie from 'lottie-web';
import Loading from '../../assets/lottie/loading/loading.json';
import isIOSorChrome from '../../utils/isIOSorChrome';
export default defineComponent({
  name: 'Banner',
  setup() {
    const state = reactive({
      isLoading: false,
      scale: document.documentElement.clientWidth / 375,
    });

    /**
     * 加载动画
     */
    const loading = ref<HTMLDivElement>(null as unknown as HTMLDivElement);
    const loadingAnimation = () => {
      lottie.loadAnimation({
        container: loading.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Loading,
      });
    };
    /**
     * video转canvas
     */
    const initCanvas = () => {
      const canvas: HTMLCanvasElement = document.getElementById('video-to-canvas') as HTMLCanvasElement;
      console.log(canvas);
      canvas.width = 375 * state.scale;
      canvas.height = 800 * state.scale;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      const video: HTMLVideoElement = document.createElement('video');
      video.src = '/mobile/home-banner.mp4';
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.width = 1;
      video.height = 1;
      video.style.opacity = '0';
      video.style.position = 'fixed';
      video.style.pointerEvents = 'none';
      if (!document.querySelector('video')) {
        console.log('has video');
        document.body.appendChild(video);
      }
      const drawCanvas = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // console.log({ ctx });
        requestAnimationFrame(drawCanvas);
      };

      video.play();
      drawCanvas();
    };

    onMounted(() => {
      loadingAnimation();
      // if (isAndroid()) {
      // initCanvas();
      // }
    });

    return {
      loading,
      state,
      initCanvas,
      isIOSorChrome,
    };
  },
});
</script>

<style lang="scss" scoped>
/* 隐藏video控件 */
video::-webkit-media-controls-enclosure {
  display: none;
}
.banner {
  width: 375px;
  height: 800px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #000000;

  .loading {
    width: 40px;
    height: 40px;
    margin-bottom: 286px;
    z-index: 10;
  }

  .banner-video,
  .banner-image {
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

    z-index: 20;

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
    z-index: 10;
  }
}
</style>
