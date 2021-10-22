<template>
  <div class="other-pages">
    <img :src="cover" alt="cover" class="cover" />
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <router-link :to="link" append>
      <div class="btn-more">了解更多</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "OtherPages",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "a",
    },
    cover: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "/",
    },
  },
});
</script>

<style lang="scss" scoped>
.other-pages {
  width: 100vw;
  height: 525px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  .cover {
    width: 375px;
    height: 316px;
  }

  .content {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .title {
      text-align: center;
      @include title;
    }

    .description {
      width: 255px;
      text-align: center;
      @include description;
    }
  }
}
</style>
