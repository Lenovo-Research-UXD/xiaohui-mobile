<template>
  <div class="apis-wrapper">
    <div class="api" v-for="item in apis" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <div class="detail">{{ item.detail }}</div>
      <img :src="getImageUrl(item.cover)" alt="cover" class="cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
const apis = [
  {
    title: '抽象素材生成API',
    detail:
      '支持根据用户指定的数量和分辨率随机生成相对应的抽象背景图片。可作为线上海报，banner及线下包装，宣传物料的设计素材。',
    url: 'https://brain.lenovo.com/#/zh-cn/Products/productContent?id=4455&version=1.0&name=%2Fai-design%2Fad%2Fabstract-art-service',

    cover: 'api/api-cover-1@2x.png',
  },
  {
    title: '定向语意生成API',
    detail:
      '在指定素材基础上，根据语义风格标签对素材进行定向变化，并形成新的抽象素材。可作为设计微调，灵感拓展，智能互动工具等使用。',
    url: 'https://brain.lenovo.com/#/zh-cn/Products/productContent?id=4458&version=1.0&name=%2Fai-design%2Fad%2Fsemantic-art-design',

    cover: 'api/api-cover-2@2x.png',
  },
  {
    title: '风格转换API',
    detail:
      '支持用户输入的单张图片转换为用户所指定的风格图片，可用于生成各种艺术设计素材、趣味互动等营销类型应用场景。',
    url: 'https://brain.lenovo.com/#/zh-cn/Products/productContent?id=4456&version=1.0&name=%2Fai-design%2Fad%2Fstyle-transfer-service',

    cover: 'api/api-cover-3@2x.png',
  },
  {
    title: '艺术头像API',
    detail:
      '支持将用户输入的正面人像图片裁切后转换为油画风格或者二次元头像，可以用于个性社交头像、市场营销类互动等应用场景。',
    url: 'https://brain.lenovo.com/#/zh-cn/Products/productContent?id=4457&version=1.0&name=%2Fai-design%2Fad%2Fart-portrait-service',

    cover: 'api/api-cover-4@2x.png',
  },
];
const getImageUrl = function (name: string) {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.apis-wrapper {
  width: 315px;
  height: 1822px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .api {
    width: 315px;
    height: 433px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);

    .title {
      @include title;
    }

    .detail {
      @include commonText;
      padding: 10px 0 20px 0;
    }

    .cover {
      widtåh: 275px;
      height: 275px;
    }
  }
}
</style>
