<script setup lang="ts">
import Layout from "../components/tool/Layout.vue";
import { ToolLayout, ToolDetail } from "../types/index";
const tool: ToolLayout = {
  video: "mindmap.mp4",
  cover: "tool/mindmap-cover@2x.png",
  title: "创意脑图工具",
  description: "突破传统的创意拓展工具，\n智能编辑，随心所欲",
  details: [
    {
      cover: "tool/mindmap-detail-1@2x.png",
      title: "一键刷新get\n海量创意",
      description:
        "通过智能关键帧极速生成永不重复的动画素\n材，风格多样，每次都是新创意",
    },
    {
      cover: "tool/mindmap-detail-2@2x.png",
      title: "突破传统的智能\n编辑方式",
      description: "自动生成首尾街接的循环视频，\n资源友好，5秒即是永恒",
    },
    {
      cover: "tool/mindmap-detail-3@2x.png",
      title: "源于GAN网络的神奇技术\n张张版权无忧",
      description:
        "经过深度定制的生成对抗技术，创造高精度\n品质图片， 超1,000,000原创设计，\n版权放心使用",
    },
  ] as Array<ToolDetail>,
};
</script>

<template>
  <div class="tool">
    <Layout :tool="tool"></Layout>
  </div>
</template>
