<script setup lang="ts">
import Card from "../components/common/Card.vue";

import Banner from "../components/home/Banner.vue";
import { getImageUrl } from "../utils/getImageUrl";
import { ToolCard } from "../types/index";
const tools: Array<ToolCard> = [
  {
    title: "流体动画工具",
    description: "前所未见的流体动态素材，自由连接，一气合成",
    cover: "common/cover-animation@2x.png",
    link: "",
  },
  {
    title: "创意脑图工具",
    description: "突破传统的创意拓展工具，智能编辑，随心所欲",
    cover: "common/cover-mindmap@2x.png",
    link: "",
  },
  {
    title: "智绘水墨工具",
    description: "大师级的水墨创意设计，高清细节，随心而韵",
    cover: "common/cover-iink@2x.png",
    link: "",
  },
];
</script>

<template>
  <div class="home">
    <!-- <Banner></Banner> -->
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
  </div>
</template>

<style lang="scss" scoped>
@import "/style/mixin.scss";
.home {
  width: 100vw;
  background-color: $backgroundColor;

  .placeholder {
    width: 100vw;
    height: 381px;
  }
  .card-wrapper {
    top: 0;
    z-index: 10;
    width: 100vw;
    height: 1509px;
    padding: 44px 0 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
