<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
export default defineComponent({
  name: 'DemoImage',
  props: {
    toolName: {
      type: String,
      default: '',
    },
    images: {
      type: Object as PropType<Array<string>>,
      default: [''],
    },
  },
  setup() {
    const getImageUrl = (name: string) => {
      return new URL(`../../assets/images/tool/${name}`, import.meta.url).href;
    };
    return {
      getImageUrl,
    };
  },
});
</script>
<template>
  <div class="demo">
    <div class="title">下载壁纸</div>
    <div class="description">以下素材均来自{{ toolName }}</div>
    <div class="demos-wrapper">
      <div class="demo-wrapper" v-for="(image, index) in images" :key="index">
        <img :src="getImageUrl(image)" alt="image" class="demo-image" />
        <img src="/images/common/icon-zoom-in.svg" alt="zoomin" class="icon-zoom-in" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 375px;
  height: 194px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    @include title;
  }

  .description {
    @include commonText;
    padding: 10px 0 20px 0;
  }

  .demos-wrapper {
    width: 375px;
    height: 214px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .demo-wrapper {
      width: 120px;
      height: 214px;
      position: relative;

      .demo-image {
        width: inherit;
        height: inherit;
      }

      .icon-zoom-in {
        width: 24px;
        height: 24px;
        right: 10px;
        bottom: 10px;
        position: absolute;
      }
    }
  }
}
</style>
