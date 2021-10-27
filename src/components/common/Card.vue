<template>
  <div class="card">
    <img :src="cover" alt="cover" class="cover" />
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>

    <router-link :to="link" append>
      <div class="more">
        了解详情
        <img src="/images/common/icon-right.svg" alt="more" class="icon-more" />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    cover: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 315px;
  height: 455px;
  background-color: #ffffff;
  box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 10;

  .cover {
    width: 255px;
    height: 255px;
  }

  .content {
    width: 100%;
    height: 81px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      @include title;
      width: 100%;
      height: 31px;
    }

    .description {
      @include description;
      width: 100%;
      height: 42px;
    }
  }
  a {
    width: 72px;
    .more {
      @include link;
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon-more {
        display: inline-block;
        width: 14px;
        height: 14px;
        padding-left: 6px;
      }
    }
  }
}
</style>
