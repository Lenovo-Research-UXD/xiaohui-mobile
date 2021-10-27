<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { reactive } from 'vue';
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
    const state = reactive({
      showImageFullScreen: '',
    });
    /**
     * 获取图片资源
     */
    const getImageUrl = (name: string) => {
      return new URL(`../../assets/images/tool/${name}`, import.meta.url).href;
    };
    /**
     * 全屏展示图片
     * @params {string} image 图片路由
     */
    const getFullScreenImage = (image: string) => {
      state.showImageFullScreen = image;
    };
    /**
     * 关闭全屏展示图片
     */
    const closeFullScreenImage = () => {
      state.showImageFullScreen = '';
    };
    return {
      getImageUrl,
      state,
      getFullScreenImage,
      closeFullScreenImage,
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
        <img
          src="/images/common/icon-zoom-in.svg"
          alt="zoomin"
          class="icon-zoom-in"
          @click="getFullScreenImage(image)"
        />
      </div>
    </div>
  </div>

  <teleport to="body">
    <div class="modal-wrapper" v-show="state.showImageFullScreen" @click="closeFullScreenImage">
      <img :src="getImageUrl(state.showImageFullScreen)" alt="cover" />
    </div>
  </teleport>
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
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(12px);
  z-index: 200;

  img {
    width: 100vw;
    height: auto;
  }
}
</style>
