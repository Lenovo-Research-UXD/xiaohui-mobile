<template>
  <div class="header">
    <img class="icon-nav" src="/images/common/icon-nav@2x.png" alt="nav" @click="clickNavHeader" />
    <div class="icon-xiaohui-wrapper">
      <img class="icon-xiaohui" src="/images/common/icon-xiaohui@2x.png" alt="xiaohui" />
      <img src="/images/common/icon-beta.svg" alt="beta" class="icon-beta" />
    </div>
    <div class="btn-try" v-show="state.showBtn && [1, 2, 3].includes(state.activeIndex)">
      <router-link to="#demo" append> 免费试用 </router-link>
    </div>
  </div>

  <transition name="fade">
    <div class="nav-list" v-show="state.showNav" @click="foldNav">
      <div class="placeholder"></div>
      <div class="nav" v-for="(item, index) in state.list" :key="item.name">
        <router-link :to="item.link" append>
          <div :class="['nav-name', index == state.activeIndex ? 'nav-active' : '']" @click.stop="clickNav(index)">
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
  </transition>

  <transition name="bg">
    <div class="bg" v-show="state.showNav"></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, watch } from '@vue/runtime-core';
import { reactive } from 'vue';
export default defineComponent({
  name: 'Header',
  props: {
    showBtn: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['showNav'],
  watch: {
    $route: {
      handler(val: any) {
        this.routeChange(val);
      },
      immediate: true,
    },
  },
  setup(props, context) {
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
      showBtn: props.showBtn,
    });

    /** 实时监听顶部是否需要显示按钮 */
    watch(props, newProps => {
      let showBtn: boolean = newProps.showBtn;
      state.showBtn = showBtn;
    });

    /** 点击导航栏头部的响应事件 */
    const clickNavHeader = () => {
      state.showNav === true ? foldNav() : unfoldNav();
    };

    /**
     * 点击导航栏菜单时的响应事件
     */
    const clickNav = (index: number) => {
      state.activeIndex = index;
      foldNav();
    };

    /**
     * 关闭显示导航栏面板
     */
    const foldNav = () => {
      state.showNav = false;
      context.emit('showNav', state.showNav);
    };

    /** 开始显示导航栏面板 */
    const unfoldNav = () => {
      state.showNav = true;
      context.emit('showNav', state.showNav);
    };

    /**
     * 切换导航
     */
    const routeChange = (val: any) => {
      for (let i = 0; i < state.list.length; i++) {
        const l = state.list[i];
        if (l.link === val.path) {
          state.activeIndex = i;
          break;
        }
      }
    };

    return {
      state,
      clickNavHeader,
      clickNav,
      foldNav,
      unfoldNav,
      routeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
/** nav-list transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease, transform 0.8s ease-in;
}
.fade-enter-from {
  transform: translateY(calc(44px - 100vh));
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.fade-leave-to {
  transform: translateY(calc(44px - 100vh));
  opacity: 0;
}

/** bg */
.bg {
  z-index: 100;
  width: 375px;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  transform: translateY(0);
}

.bg-enter-active {
  transition: opacity 0.48s ease-in-out 0.05s, transform 0.48s cubic-bezier(0.4, 0, 0.2, 1) 0.05s;
}
.bg-leave-active {
  transition: opacity 0.39s ease-in-out 0.24s, transform 0.44s cubic-bezier(0.4, 0, 0.2, 1) 0.19s;
}
.bg-enter-from {
  opacity: 0;
  transform: translateY(-100vh);
}
.bg-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.bg-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.bg-leave-to {
  opacity: 0;
  transform: translateY(-100vh);
}

.header {
  width: 375px;
  height: 44px;
  padding: 0 10px;
  position: fixed;
  z-index: 110;
  overflow: visible;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  -moz-backdrop-filter: blur(12px);
  -ms-backdrop-filter: blur(12px);

  .icon-nav {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
  .icon-xiaohui-wrapper {
    width: 80px;
    height: 17px;

    position: absolute;
    top: 14px;
    left: 148px;
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

  .btn-try {
    width: 80px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid rgba(76, 104, 255, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    color: $linkColor;
    line-height: 14px;
  }
}

.nav-list {
  display: none;
  z-index: 100;
  position: fixed;
  width: 375px;
  height: 100vh;
  background-color: #ffffff;

  border-top: 1px solid rgba(68, 69, 83, 0.05);

  .placeholder {
    width: 375px;
    height: 44px;
  }

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
