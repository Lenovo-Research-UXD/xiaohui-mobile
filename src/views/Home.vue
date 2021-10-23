<script setup lang="ts">
import Banner from '../components/home/Banner.vue';
import Card from '../components/common/Card.vue';
import OtherPages from '../components/home/OtherPages.vue';
import Swiper from '../components/home/Swiper.vue';
import CopyUrl from '../components/common/CopyUrl.vue';
import { ToolCard } from '../types/index';
const tools: Array<ToolCard> = [
  {
    title: '流体动画工具',
    description: '前所未见的流体动态素材，自由连接，一气呵成',
    cover: 'common/cover-animation@2x.png',
    link: '/tool-animation',
  },
  {
    title: '创意脑图工具',
    description: '突破传统的创意拓展工具，智能编辑，随心所欲',
    cover: 'common/cover-mindmap@2x.png',
    link: '/tool-mindmap',
  },
  {
    title: '智绘水墨工具',
    description: '大师级的水墨创意设计，高清细节，随心而韵',
    cover: 'common/cover-iink@2x.png',
    link: '/tool-iink',
  },
];
const otherPages = [
  {
    title: '智能互动装置',
    description: '多种AI技术支撑的互动玩法，软硬件一体的线下引流神器',
    cover: 'common/cover-device@2x.png',
    link: '/device',
  },
  {
    title: 'API接入',
    description: '提供丰富的API接口及文档支持，为你的产品插上创意的翅膀',
    cover: 'common/cover-api@2x.png',
    link: '/api',
  },
];
const copyUrlMsg = '免费试用设计工具';
const getImageUrl = function (name: string) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
</script>

<template>
  <div class="home">
    <Banner></Banner>
    <div class="placeholder"></div>
    <div class="card-wrapper">
      <Card
        :title="tool.title"
        :description="tool.description"
        :link="tool.link"
        :cover="getImageUrl(tool.cover)"
        v-for="tool in tools"
        :key="tool.title"
      ></Card>
    </div>
    <div class="other-pages-wrapper">
      <OtherPages
        v-for="page in otherPages"
        :key="page.title"
        :title="page.title"
        :description="page.description"
        :cover="getImageUrl(page.cover)"
        :link="page.link"
      ></OtherPages>
    </div>
    <div class="swiper-wrapper">
      <Swiper></Swiper>
    </div>
    <div class="copyurl-wrapper">
      <CopyUrl :msg="copyUrlMsg"></CopyUrl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 375px;
  background-color: $backgroundColor;

  .placeholder {
    width: 375px;
    height: 532px;
  }
  .card-wrapper {
    top: 0;
    z-index: 10;
    width: 375px;
    height: 1509px;
    padding: 44px 0 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .copyurl-wrapper {
    width: 375px;
    height: 372px;
    padding: 100px 0;
  }
}
</style>
