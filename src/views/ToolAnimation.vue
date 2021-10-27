<script setup lang="ts">
import Layout from '../components/tool/Layout.vue';
import { ToolLayout, ToolDetail, DemoAssets } from '../types/index';
const tool: ToolLayout = {
  video: 'animation.mp4',
  cover: 'tool/animation-cover@2x.png',
  title: '流体动画工具',
  description: '前所未见的流体动态素材，\n自由连接，一气呵成',
  link: '/tool-animation',
  details: [
    {
      cover: 'tool/animation-detail-1@2x.png',
      title: '挑战动画设计效率极限',
      description: '通过智能关键帧极速生成永不重复的动画素\n材，风格多样，每次都是新创意',
    },
    {
      cover: 'tool/animation-detail-2@2x.png',
      title: '无缝循环视频\n带来独特体验',
      description: '自动生成首尾街接的循环视频，\n资源友好，5秒即是永恒',
    },
    {
      cover: 'tool/animation-detail-3@2x.png',
      title: '滑块式时间轴编辑',
      description: '自由拖拽关键帧滑块即可实现快速编辑，\n创意随心而动',
    },
  ] as Array<ToolDetail>,
  assets: [
    {
      video: 'iink.mp4',
      cover: 'animation-demo-cover-1@2x.png',
    },
    {
      video: '',
      cover: 'animation-demo-cover-2@2x.png',
    },
    {
      video: '',
      cover: 'animation-demo-cover-3@2x.png',
    },
  ] as Array<DemoAssets>,
};
</script>

<template>
  <div class="tool">
    <Layout :tool="tool"></Layout>
  </div>
</template>
