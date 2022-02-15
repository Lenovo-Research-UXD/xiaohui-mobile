<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { reactive } from 'vue';
import { VideoDemoAssets } from '../../types/index';
import isAndroid from '../../utils/isAndroid';
import toFullVideo from '../../utils/toFullVideo';
export default defineComponent({
  name: 'DemoVideo',
  props: {
    toolName: {
      type: String,
      default: '',
    },
    assets: {
      type: Array as PropType<Array<VideoDemoAssets>>,
      default: [],
    },
  },
  setup() {
    const state = reactive({
      videoRefs: [] as Array<HTMLVideoElement>,
      activeIndex: -1,
      showVideoFullScreen: '',
    });
    const getImageUrl = (name: string) => {
      return new URL(`../../assets/images/tool/${name}`, import.meta.url).href;
    };
    const getVideoUrl = (name: string) => {
      return new URL(`../../assets/videos/${name}`, import.meta.url).href;
    };
    /**
     * 播放视频
     */
    const playVideo = (index: number) => {
      // 选中态的改变
      if (state.activeIndex !== -1) {
        state.videoRefs[state.activeIndex].pause();
      }
      state.activeIndex = index;
      // 播放视频
      // state.videoRefs[index].play();
      // 全屏播放 仅针对Android实现
      if (isAndroid()) {
        let promise = toFullVideo(state.videoRefs[index]);
        promise
          .then(() => state.videoRefs[index].play())
          .catch((err: any) => {
            console.log(err, '无法全屏播放');
          });
      } else {
        state.videoRefs[index].play();
      }
    };
    /**
     * 暂停视频
     */
    const pause = (index: number) => {
      if (state.activeIndex === index) {
        state.videoRefs[state.activeIndex].pause();
        if (isAndroid()) document.exitFullscreen();
        state.activeIndex = -1;
      }
    };
    /**
     * 获取循环列表中的ref
     */
    const setItemRef = (el: any) => {
      if (el) {
        state.videoRefs.push(el as HTMLVideoElement);
      }
    };
    /**
     * 结束播放时再次显示播放按钮
     */
    const completeVideo = () => {
      // state.activeIndex = -1;
      // 退出全屏播放 仅针对Android实现
      if (isAndroid()) {
        document.exitFullscreen();
        state.activeIndex = -1;
      } else {
        state.activeIndex = -1;
      }
    };
    return {
      state,
      getImageUrl,
      getVideoUrl,
      playVideo,
      completeVideo,
      setItemRef,
      pause,
    };
  },
});
</script>
<template>
  <div class="demo">
    <div class="title">下载动态壁纸</div>
    <div class="description">以下素材均来自{{ toolName }}</div>
    <div class="demos-wrapper">
      <div class="demo-wrapper" v-for="(asset, index) in assets" :key="index">
        <video
          :src="getVideoUrl(asset.video)"
          :poster="getImageUrl(asset.cover)"
          :ref="setItemRef"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portrait"
          @ended="completeVideo"
          @click="pause(index)"
          @pause="pause(index)"
        ></video>
        <img
          src="/images/common/icon-video-play.svg"
          alt="icon"
          class="icon-play"
          @click="playVideo(index)"
          v-show="state.activeIndex != index"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    @include title;
  }

  .description {
    @include commonText;
    padding: 10px 0 20px 0;
  }

  .demos-wrapper {
    width: 375px;
    height: 214px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .demo-wrapper {
      width: 120px;
      height: 214px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      video {
        width: inherit;
        height: inherit;
        position: absolute;
      }

      video::-webkit-media-controls {
        display: none !important;
      }

      .icon-play {
        width: 46px;
        height: 46px;
        z-index: 10;
      }
    }
  }
}
</style>
