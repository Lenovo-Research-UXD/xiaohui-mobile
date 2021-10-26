<script setup lang="ts">
import Layout from '../components/tool/Layout.vue';
import { ToolLayout, ToolDetail } from '../types/index';
const tool: ToolLayout = {
  video: 'iink.mp4',
  cover: 'tool/iink-cover@2x.png',
  title: '智绘水墨工具',
  description: '大师级的水墨创意设计，高\n清细节，随心而韵',
  link: '/tool-iink',
  details: [
    {
      cover: 'tool/iink-detail-1@2x.png',
      title: '6向智能色环\n轻滑搞定配色',
      description: '通过智能关键帧极速生成永不重复的动画素\n材，风格多样，每次都是新创意',
    },
    {
      cover: 'tool/iink-detail-2@2x.png',
      title: '直觉型参数调节',
      description: '创新的操作控件，将水墨设计的复杂规则可\n视化，用鼠标也能泼洒创意',
    },
    {
      cover: 'tool/iink-detail-3@2x.png',
      title: '一键刷新方案\n不满意随时换',
      description: '只需要点击刷新按钮，就可以极速生成全新\n水墨设计方案，想要多少就多少',
    },
  ] as Array<ToolDetail>,
  images: ['iink-demo-1@2x.png', 'iink-demo-2@2x.png', 'iink-demo-3@2x.png'],
};
</script>

<template>
  <div class="tool">
    <Layout :tool="tool"></Layout>
  </div>
</template>
