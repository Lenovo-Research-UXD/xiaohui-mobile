<template>
  <div class="video">
    <!-- 
      @component video 
      @state 显示控件
    -->
    <video
      :poster="getImageUrl(cover)"
      controls
      v-show="state.showControls"
      @ended="completeVideo()"
      ref="videoDom"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5-page"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
    >
      <source :src="getVideoUrl(video)" type="video/mp4" />
    </video>

    <!-- 
      @component video 
      @state 不显示控件
    -->
    <video
      :poster="getImageUrl(cover)"
      v-show="state.showControls == false"
      webkit-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
    >
      <source :src="getVideoUrl(video)" type="video/mp4" />
    </video>

    <div class="btn-play" v-show="state.showBtn" @click="play()">
      <img src="/images/common/icon-video-play.svg" alt="play-video" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted, onUnmounted } from 'vue';
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

    /**
     * 视频脱离可视窗口时 停止播放
     */
    const callback = (i: any) => {
      if (i[0].intersectionRatio < 0.5) {
        videoDom.value.pause();
      }
    };
    const options = {
      root: null,
      threshold: [0.01],
    };
    const io = new IntersectionObserver(callback, options);

    /**
     * 全局state
     * @member showControls 是否显示控制区
     * @member showBtn 是否显示播放按钮
     */
    const state = reactive({
      showControls: false,
      showBtn: true,
    });

    /**
     * 播放功能
     * 同时显示控制区 隐藏播放按钮
     */
    const play = () => {
      state.showControls = true;
      state.showBtn = false;

      setTimeout(() => {
        videoDom.value.play();
      }, 0);
    };

    /**
     * 监听视频播放结束时 隐藏控制栏 并重新显示播放按钮
     */
    const completeVideo = () => {
      state.showControls = false;
      state.showBtn = true;
    };

    /**
     * 工具函数-获取图片媒体资源
     * @params name 图片路由
     * @returns 获取的图片资源的href
     */
    const getImageUrl = function (name: string) {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    };

    /**
     * 工具函数-获取视频媒体资源
     * @params name 视频路由
     * @returns 获取的视频资源的href
     */
    const getVideoUrl = function (name: string) {
      return new URL(`../../assets/videos/${name}`, import.meta.url).href;
    };

    /**
     * 视频可见性控制
     */
    onMounted(() => {
      io.observe(videoDom.value);
    });

    onUnmounted(() => {
      io.disconnect();
    });

    return {
      io,
      videoDom,
      state,
      play,
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
    opacity: 0.8;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active {
      opacity: 1;
    }

    img {
      width: 89px;
      height: 89px;
    }
  }
}
</style>
