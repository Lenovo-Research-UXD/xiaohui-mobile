<template>
  <div class="video">
    <!-- 
      @component video 
      @state 显示控件
    -->
    <video :poster="getImageUrl(cover)" controls v-show="state.showControls" @ended="completeVideo()" ref="videoDom">
      <source :src="getVideoUrl(video)" type="video/mp4" />
    </video>

    <!-- 
      @component video 
      @state 不显示控件
    -->
    <video :poster="getImageUrl(cover)" v-show="state.showControls == false">
      <source :src="getVideoUrl(video)" type="video/mp4" />
    </video>

    <div class="btn-play" v-show="state.showBtn" @click="play()">
      <img src="/images/common/icon-video-play.svg" alt="play-video" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue';
export default defineComponent({
  name: 'Video',
  props: {
    video: {
      type: String,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const videoDom = ref<HTMLVideoElement>(null as unknown as HTMLVideoElement);

    const state = reactive({
      showControls: false,
      showBtn: true,
    });

    const play = () => {
      state.showControls = true;
      state.showBtn = false;

      setTimeout(() => {
        videoDom.value.play();
      }, 0);
    };

    const playFull = () => {
      state.showControls = true;
      state.showBtn = false;

      setTimeout(() => {
        videoDom.value.play();
        videoDom.value.requestFullscreen();
      }, 0);
    };

    const completeVideo = () => {
      state.showControls = false;
      state.showBtn = true;
    };

    const getImageUrl = function (name: string) {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    };
    const getVideoUrl = function (name: string) {
      return new URL(`../../assets/videos/${name}`, import.meta.url).href;
    };

    return {
      videoDom,
      state,
      play,
      playFull,
      completeVideo,
      getImageUrl,
      getVideoUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
.video {
  width: 375px;
  height: 212px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 375px;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    position: absolute;
  }

  .btn-play {
    width: 89px;
    height: 89px;
    /* position: absolute; */
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active {
      opacity: 1;
    }
  }
}
</style>
