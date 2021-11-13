<script setup lang="ts">
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import { onMounted, onUnmounted, reactive, ref } from '@vue/runtime-core';

const state = reactive({
  showBtn: false,
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
</script>

<template>
  <Header :showBtn="state.showBtn"></Header>
  <div class="placeholder" ref="placeholder"></div>
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
</style>
