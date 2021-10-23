<script setup lang="ts">
import Device from '../components/device/Device.vue';
import CopyUrl from '../components/common/CopyUrl.vue';
const copyUrlMsg = '免费试用装置';
</script>

<template>
  <div class="device">
    <div class="banner-wrapper">
      <img src="/images/device/banner@2x.png" alt="banner" class="banner" />
      <div class="title">一起与艺术互动</div>
    </div>
    <div class="device-wrapper">
      <Device></Device>
    </div>
    <div class="copyurl-wrapper">
      <CopyUrl :msg="copyUrlMsg"></CopyUrl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.device {
  width: 375px;
  background-color: $backgroundColor;

  .banner-wrapper {
    position: relative;
    .banner {
      width: 375px;
      height: 160px;
    }
    .title {
      @include title;
      position: absolute;
      top: 63px;
      left: 34px;
    }
  }

  .device-wrapper {
    width: 375px;
    height: 1695px;
    padding-top: 100px;

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
