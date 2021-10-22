<script setup lang="ts">
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <Header></Header>
  <div class="placeholder"></div>
  <keep-alive>
    <router-view />
  </keep-alive>
  <Footer></Footer>
</template>

<style scoped>
.placeholder {
  width: 100vw;
  height: 44px;
}
</style>
