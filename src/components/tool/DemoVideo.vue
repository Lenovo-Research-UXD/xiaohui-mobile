<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { reactive } from 'vue';
import { DemoAssets } from '../../types/index';
export default defineComponent({
  name: 'DemoVideo',
  props: {
    toolName: {
      type: String,
      default: '',
    },
    assets: {
      type: Object as PropType<Array<DemoAssets>>,
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
      state.activeIndex = index;
      state.videoRefs[index].play();
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
      state.activeIndex = -1;
    };
    return {
      state,
      getImageUrl,
      getVideoUrl,
      playVideo,
      completeVideo,
      setItemRef,
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
          @ended="completeVideo"
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
  height: 194px;
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

      .icon-play {
        width: 46px;
        height: 46px;
        z-index: 10;
      }
    }
  }
}
</style>
