<template>
  <div class="header">
    <img class="icon-nav" src="/images/common/icon-nav@2x.png" alt="nav" @click="state.showNav = !state.showNav" />
    <div class="icon-xiaohui-wrapper">
      <img class="icon-xiaohui" src="/images/common/icon-xiaohui@2x.png" alt="xiaohui" />
      <img src="/images/common/icon-beta.svg" alt="beta" class="icon-beta" />
    </div>
  </div>

  <div class="nav-list" v-show="state.showNav">
    <div class="placeholder"></div>
    <div class="nav" v-for="(item, index) in state.list" :key="item.name">
      <router-link :to="item.link" append>
        <div :class="['nav-name', index == state.activeIndex ? 'nav-active' : '']" @click="clickNav(index)">
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { reactive } from 'vue';
export default defineComponent({
  name: 'Header',
  setup() {
    const state = reactive({
      showNav: false,
      list: [
        {
          name: '主页',
          link: '/',
        },
        {
          name: '流体动画工具',
          link: '/tool-animation',
        },
        {
          name: '创意脑图工具',
          link: '/tool-mindmap',
        },
        {
          name: '智慧水墨工具',
          link: '/tool-iink',
        },
        {
          name: '智能互动装置',
          link: '/device',
        },
        {
          name: 'API接入',
          link: '/api',
        },
        {
          name: '关于我们',
          link: '/about',
        },
      ],
      activeIndex: 0,
    });

    const clickNav = (index: number) => {
      state.activeIndex = index;
      state.showNav = false;
    };
    return {
      state,
      clickNav,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 375px;
  height: 44px;
  position: fixed;
  z-index: 110;
  overflow: show;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.placeholder {
  width: 375px;
  height: 44px;
}
.icon-nav {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
}
.icon-xiaohui-wrapper {
  width: 80px;
  height: 17px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-xiaohui {
    width: 80px;
    height: 17px;
  }

  .icon-beta {
    width: 14px;
    height: 5px;
    position: absolute;
    right: -18px;
    top: 1px;
  }
}

.nav-list {
  /* opacity: 0.8; */
  z-index: 100;
  position: absolute;
  width: 375px;
  height: 100vh;
  background-color: #ffffff;

  border-top: 1px solid rgba(68, 69, 83, 0.05);

  .nav {
    width: 375px;
    height: 58px;
    border-bottom: 1px solid rgba(68, 69, 83, 0.05);
    padding: 20px 30px;

    .nav-name {
      font-size: 16px;
      line-height: 21px;
    }
    .nav-active {
      color: $linkColor;
    }
  }
}
</style>
