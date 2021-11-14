<template>
  <div class="banner">
    <div class="loading" ref="loading" v-show="state.isLoading"></div>
    <video
      src="/videos/home-banner.mp4"
      poster="/images/home/cover-intro@2x.png"
      autoplay
      muted
      loop
      webkit-playsinline="true"
      x5-video-player-type="h5"
      playsinline="true"
      preload="true"
      controls="false"
      ref="introVideo"
    ></video>
    <div class="content">
      <div class="title">小绘，设计突破想象</div>
      <div class="description">突破想象的图形设计工具集，使用AI生成技术帮助你轻松搞定设计工作</div>
    </div>
    <img src="/images/home/mask@2x.png" alt="mask" class="mask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from '@vue/runtime-core';
import { onMounted, reactive, ref, watch } from 'vue';
import lottie from 'lottie-web';
import Loading from '../../assets/lottie/loading/loading.json';
export default defineComponent({
  name: 'Banner',
  setup() {
    const state = reactive({
      isLoading: false,
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
     * 加载视频
     */
    const introVideo = ref<HTMLVideoElement>(null as unknown as HTMLVideoElement);

    onMounted(() => {
      loadingAnimation();
    });

    return {
      loading,
      introVideo,
      state,
    };
  },
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

  background: #000000;

  .loading {
    width: 40px;
    height: 40px;
    margin-bottom: 286px;
    z-index: 10;
  }

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
