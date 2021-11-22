<script setup lang="ts">
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { onMounted, onUnmounted, reactive, ref } from '@vue/runtime-core';

const state = reactive({
  showBtn: false,
  showNav: false,
});
const placeholder = ref<HTMLDivElement>(null as unknown as HTMLDivElement);
/**
 * 占位符可视区域<1时 触发header显示按钮
 */
const callback = (i: any) => {
  if (i[0].intersectionRatio == 1) {
    state.showBtn = false;
  } else {
    state.showBtn = true;
  }
};
const options = {
  root: null,
  threshold: [0, 1],
};
const io = new IntersectionObserver(callback, options);
onMounted(() => {
  io.observe(placeholder.value);
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
  <Header :showBtn="state.showBtn" @showNav="showNav"></Header>
  <div class="placeholder" ref="placeholder"></div>

  <transition name="blur">
    <div v-show="state.showNav" class="blur-layer"></div>
  </transition>

  <keep-alive>
    <router-view />
  </keep-alive>
  <Footer></Footer>
</template>

<style scoped>
.placeholder {
  width: 375px;
  height: 44px;
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
