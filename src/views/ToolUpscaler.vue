<script setup lang="ts">
import Layout from '../components/tool/Layout.vue';
import { ToolLayout, ToolDetail, DemoAssets } from '../types/index';
const tool: ToolLayout = {
  video: 'upscaler.mp4',
  cover: 'tool/upscaler-cover@2x.png',
  title: '像素增强工具',
  description: '不再被图片尺寸和清晰度束缚\n无损放大，高清无忧',
  link: '/tool-upscaler',
  details: [
    {
      cover: 'tool/upscaler-detail-1@2x.png',
      title: '多种图片内容\n轻松应对',
      description: '无论是风景图，抽象图，卡通图，智能算法\n自动检测模糊空间并填充更多细节，将模糊\n图片变清晰。',
    },
    {
      cover: 'tool/upscaler-detail-2@2x.png',
      title: '在线支持800%\n无损放大',
      description: '在线工具提供2倍、4倍、8倍无损放大，轻\n松应对打印、PPT、设计工作等多种场景。',
    },
    {
      cover: 'tool/upscaler-detail-3@2x.png',
      title: '自动内容识别&\n智能裁切',
      description: '智能识别图片中最精彩的部分，只需输入目\n标图片的长宽尺寸，自动裁切，一键下载。',
    },
  ] as Array<ToolDetail>,
  assets: [
    {
      clear: 'upscaler-demo-clear-1@2x.png',
      unclear: 'upscaler-demo-unclear-1@2x.png',
    },
    {
      clear: 'upscaler-demo-clear-1@2x.png',
      unclear: 'upscaler-demo-unclear-1@2x.png',
    },
    {
      clear: 'upscaler-demo-clear-1@2x.png',
      unclear: 'upscaler-demo-unclear-1@2x.png',
    },
    {
      clear: 'upscaler-demo-clear-1@2x.png',
      unclear: 'upscaler-demo-unclear-1@2x.png',
    },
    {
      clear: 'upscaler-demo-clear-1@2x.png',
      unclear: 'upscaler-demo-unclear-1@2x.png',
    },
  ] as Array<DemoAssets>
};
</script>

<template>
  <div class="tool">
    <Layout :tool="tool"></Layout>
  </div>
</template>