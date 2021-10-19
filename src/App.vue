<script setup lang="ts">
import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
</script>

<template>
  <Header></Header>
  <keep-alive>
    <router-view />
  </keep-alive>
  <Footer></Footer>
</template>
