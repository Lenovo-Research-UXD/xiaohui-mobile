<template>
  <div class="wrapper">
    <div class="title">体验像素增强</div>
    <div class="type-list-wrapper">
      <div
        :class="['type', index == state.activeIndex ? 'type-active' : '']"
        v-for="(demo, index) in demos"
        :key="index"
        @touchstart="state.activeIndex = index"
      >
        {{ demo.title }}
      </div>
    </div>
    <div class="image-wrapper" :style="{ cursor: state.isSliding ? 'ew-resize' : 'auto' }">
      <!-- 两个像素描述块 -->
      <div class="pixels-description">
        <div class="pixels-clear">4x</div>
        <div class="pixels-unclear">原</div>
      </div>
      <!-- 图片对比区域 -->
      <div class="compare-image">
        <!-- 左侧图 -->
        <img
          :src="demos[state.activeIndex].imageClear"
          alt="image-clear"
          :style="{
            clip: 'rect(auto, ' + state.sliderLeft + 'px, auto, auto)',
          }"
          class="left-image"
          ref="leftImageRef"
        />
        <!-- 右侧图 -->
        <img :src="demos[state.activeIndex].imageUnclear" alt="image-unclear" class="right-image" ref="rightImageRef" />
        <!-- 滑动条 -->
        <div class="slider" :style="{ transform: 'translate3d(' + state.sliderLeft + 'px,0,0)' }">
          <img src="/images/tool/upscaler-demo-slider@2x.png" alt="slider" @touchstart.capture="startSliding">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from 'vue';
export default defineComponent({
  name: 'DemoUpscaler',
  setup() {
    const scale = document.documentElement.clientWidth / 375;
    const state = reactive({
      activeIndex: 0,
      isSliding: false,
      leftImageStyle: '',
      sliderLeft: 230 * scale,
      originX: 0, // 开始滑动时，鼠标起始位置的x方向值
    });
    const demos = [
      {
        title: '风景',
        imageClear: '/images/tool/upscaler-demo-clear-1@2x.png',
        imageUnclear: '/images/tool/upscaler-demo-unclear-1@2x.png',
      },
      {
        title: '卡通',
        imageClear: '/images/tool/upscaler-demo-clear-2@2x.png',
        imageUnclear: '/images/tool/upscaler-demo-unclear-2@2x.png',
      },
      {
        title: '抽象',
        imageClear: '/images/tool/upscaler-demo-clear-3@2x.png',
        imageUnclear: '/images/tool/upscaler-demo-unclear-3@2x.png',
      },
      {
        title: '图标',
        imageClear: '/images/tool/upscaler-demo-clear-4@2x.png',
        imageUnclear: '/images/tool/upscaler-demo-unclear-4@2x.png',
      },
      {
        title: '建筑',
        imageClear: '/images/tool/upscaler-demo-clear-5@2x.png',
        imageUnclear: '/images/tool/upscaler-demo-unclear-5@2x.png',
      },
    ];

    /**
     * 开始滑动时
     */
    const startSliding = (event: any) => {
      // 设置初始位置的X
      const e = event || window.event;
      let x = e.targetTouches[0].clientX;
      state.originX = x;
      // 更新全局状态
      state.isSliding = true;
      // 增加监听器
      window.addEventListener('touchmove', updateSliderPosition);
      window.addEventListener('touchend', finishSliding);
    };

    /**
     * 滑动过程中 更新滑轮位置
     */
    const updateSliderPosition = (event: any) => {
      if (state.isSliding === false) return;

      const e = event || window.event;
      let x = e.targetTouches[0].clientX;
      // 保证滑动条位置在图片之上(0,100vw)，避免溢出
      state.sliderLeft = Math.max(Math.min(state.sliderLeft + x - state.originX, 375*scale), 0);
      state.originX = x;
    };

    /**
     * 滑动结束 移除各监听器
     */
    const finishSliding = () => {
      state.isSliding = false;
      window.removeEventListener('touchmove', updateSliderPosition);
      window.removeEventListener('touchend', finishSliding);
    };

    onMounted(() => {
      window.addEventListener('touchmove', updateSliderPosition);
      window.addEventListener('touchend', finishSliding);
    });

    onUnmounted(() => {
      finishSliding();
    });

    return {
      scale,
      state,
      demos,
      startSliding,
      updateSliderPosition,
      finishSliding,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 375px;
  height: 303px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    width: 375px;
    height: 32px;
    font-size: 24px;
    font-weight: bold;
    color: #222d49;
    line-height: 32px;
    text-align: center;
  }

  .type-list-wrapper {
    width: 375px;
    height: 19px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    user-select: none;

    .type {
      width: 54px;
      font-size: 14px;
      color: #222d49;
      line-height: 19px;
      text-align: center;

      &:hover,
      &:active {
        color: #4c68ff;
        text-decoration:underline #4c68ff;
      }
    }

    .type-active {
      color: #4c68ff;
      text-decoration:underline #4c68ff;
    }
  }

  .image-wrapper {
    width: 375px;
    height: 214px;
    position: relative;
    overflow: visible;

    .pixels-description {
      position: absolute;
      left: 0;
      top: 0;
      width: inherit;
      height: inherit;

      pointer-events: none;
      user-select: none;
      z-index: 30;

      .pixels-clear,
      .pixels-unclear {
        position: absolute;
        top: 13px;
        width: 28px;
        height: 28px;
        box-shadow: 0px 3px 10px 0px rgba(48, 49, 51, 0.1);
        border-radius: 18px;
        opacity: 0.8;
        backdrop-filter: blur(12px);

        padding: 4px;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        line-height: 16px;
        letter-spacing: 1px;
      }

      .pixels-clear {
        left: 10px;
        background: #303133e8;
        color: #fee300;
      }

      .pixels-unclear {
        right: 10px;
        background: rgba(238, 238, 238, 1) ;
        color:  rgba(165, 165, 165, 1) ;
      }
    }

    .compare-image {
      position: absolute;
      left: 0;
      top: 0;
      width: inherit;
      height: inherit;

      .left-image,
      .right-image {
        position: absolute;
        left: 0;
        top: 0;
        width: inherit;
        height: inherit;
        user-select: none;
      }

      .left-image {
        z-index: 10;
      }

      .slider {
        width:1px;
        z-index: 20;
        position: absolute;
        top: -6px;
        z-index: 20;
        overflow: visible;

        img {
          width: 25px;
          height: 230px;
          opacity: 1;
          position: absolute;
          transform: translateX(-45%);
          z-index: 30;
        }
      }
    }
  }
}
</style>
