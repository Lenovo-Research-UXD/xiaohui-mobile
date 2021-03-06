<script setup lang="ts">
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { onMounted, onUnmounted, reactive, ref } from '@vue/runtime-core';

const state = reactive({
  showBtn: false,
  showNav: false,
});
const observer = ref<HTMLDivElement>(null as unknown as HTMLDivElement);
/**
 * 占位符可视区域<1时 触发header显示按钮
 */
const callback = (i: any) => {
  if (i[0].intersectionRatio <= 0.1) {
    state.showBtn = true;
  } else {
    state.showBtn = false;
  }
};
const options = {
  root: null,
  threshold: [0, 0.05, 0.1, 0.2],
};
const io = new IntersectionObserver(callback, options);
onMounted(() => {
  io.observe(observer.value);
});
onUnmounted(() => {
  io.disconnect();
});

/** 监听header的展开状态 控制主体是否背景模糊*/
const showNav = (res: boolean) => {
  state.showNav = res;
};
</script>

<template>
  <keep-alive>
    <div id="header">
      <Header :showBtn="state.showBtn" @showNav="showNav"></Header>
    </div>
  </keep-alive>
  <div class="placeholder" ref="placeholder"></div>
  <div class="observer" ref="observer"></div>

  <transition name="blur">
    <div v-show="state.showNav" class="blur-layer"></div>
  </transition>

  <div class="content">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <Footer></Footer>
</template>

<style scoped>
#header {
  width: 375px;
  z-index: 100;
  overscroll-behavior-y: contain;
}
.content {
  width: 375px;
  min-height: 100vh;
  overflow: hidden;
}
.placeholder {
  width: 375px;
  height: 44px;
}

.observer {
  width: 375px;
  height: 456px;
  position: absolute;
  top: 0;
  z-index: -1;
}

/* 点击导航栏时 主体页面的模糊效果 */
.blur-layer {
  width: 375px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.2);
  z-index: 50;
  opacity: 1;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.blur-enter-active {
  transition: backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
    -webkit-backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}
.blur-leave-active {
  transition: backdrop-filter 0.3s ease-in-out 0.3s, opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.5s,
    -webkit-backdrop-filter 0.3s ease-in-out 0.3s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
  -webkit-backdrop-filter: blur(0px);
}

.blur-enter-to,
.blur-leave-from {
  opacity: 1;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
