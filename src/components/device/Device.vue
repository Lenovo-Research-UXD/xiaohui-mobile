<script setup lang="ts">
import Video from "../common/Video.vue";
const devices = [
  {
    title: "梦幻之环",
    description:
      "智能语音作画装置，用小绘的想象力和创造力， 将有限的语言幻画成无限的艺术",
    cover: "device/cover-audio-painter@2x.png",
    video: "audioPainter.mp4",
  },
  {
    title: "文字脸谱",
    description:
      "自定义文字画像装置，基于小绘智能爬山算法， 输入文字即刻绘制你独一无二的文字头像",
    cover: "device/cover-portait-by-logo@2x.png",
    video: "portaitLogo.mp4",
  },
  {
    title: "风格画屏Pro",
    description:
      "实时风格转换互动装置，甄选最美画风，提炼100+算法模型，带你走进的多彩的平行世界",
    cover: "device/cover-style-screen@2x.png",
    video: "styleScreen.mp4",
  },
  {
    title: "千寻相机",
    description:
      "个性头像设计装置，小绘智能识别性别、穿着色彩等个性特征， 智能匹配背景创意，在万千可能中遇见独一无二的你",
    cover: "device/cover-work-card-printer@2x.png",
    video: "workCardPrinter.mp4",
  },
];
</script>

<template>
  <div class="devices-wrapper">
    <div class="device" v-for="item in devices" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="description">{{ item.description }}</div>
      <div class="video-wrapper">
        <Video :video="item.video" :cover="item.cover"></Video>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.devices-wrapper {
  width: 100vw;
  height: 1595px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .device {
    width: 100vw;
    height: 312px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      @include title;
    }

    .description {
      @include commonText;
      width: 295px;
      height: 80px;
      padding: 10px 0 20px 0;
      text-align: center;
    }

    .video-wrapper {
      width: 375px;
      height: 212px;
    }
  }
}
</style>
