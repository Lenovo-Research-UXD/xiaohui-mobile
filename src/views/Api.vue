<script setup lang="ts">
import Api from '../components/api/Api.vue';
import CopyUrl from '../components/common/CopyUrl.vue';
const copyUrlMsg = '免费调用API';
</script>
<template>
  <div class="api">
    <div class="banner-wrapper">
      <img src="/images/api/banner@2x.png" alt="banner" class="banner" />
      <div class="title">一键连接艺术&技术</div>
    </div>
    <div class="api-wrapper">
      <Api></Api>
    </div>
    <div class="copyurl-wrapper">
      <CopyUrl :msg="copyUrlMsg"></CopyUrl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.api {
  width: 375px;
  background-color: $backgroundColor;
  .banner-wrapper {
    width: 375px;
    height: 160px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner {
      position: absolute;
      width: 375px;
      height: 160px;
    }
    .title {
      @include title;
      color: white;
      z-index: 10;
    }
  }

  .api-wrapper {
    width: 375px;
    height: 1862px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copyurl-wrapper {
    width: 375px;
    height: 372px;
    padding: 100px 0;
  }
}
</style>
