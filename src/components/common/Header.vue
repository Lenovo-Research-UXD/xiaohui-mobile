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

  <div class="nav-list" v-show="state.showNav" @click="foldNav">
    <div class="placeholder"></div>
    <div class="nav" v-for="(item, index) in state.list" :key="item.name">
      <router-link :to="item.link" append>
        <div
          :class="[state.navNameClass, 'nav-name', index == state.activeIndex ? 'nav-active' : '']"
          :style="{
            transform: 'translateY(' + styles.title[index].bottom + 'px)',
            opacity: styles.title[index].opacity,
          }"
          @click.stop="clickNav(index)"
        >
          {{ item.name }}
        </div>
      </router-link>
      <div
        :class="['border-bottom', state.borderBottomClass]"
        :style="{ transform: 'translateY(' + styles.line[index].bottom + 'px)', opacity: styles.line[index].opacity }"
      ></div>
    </div>
  </div>

  <transition name="bg">
    <div class="bg" v-show="state.showNav"></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/runtime-core';
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
      borderBottomClass: '',
      navNameClass: '',
    });

    /** 初始样式 */
    const styleInit = {
      line: [
        {
          bottom: -10,
          opacity: 0,
        },
        {
          bottom: -30,
          opacity: 0,
        },
        {
          bottom: -30,
          opacity: 0,
        },
        {
          bottom: -30,
          opacity: 0,
        },
        {
          bottom: -38,
          opacity: 0,
        },
        {
          bottom: -30,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
      ],
      title: [
        {
          bottom: -10,
          opacity: 0,
        },
        {
          bottom: -20,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
        {
          bottom: -40,
          opacity: 0,
        },
      ],
    };

    /** 点击样式 */
    const styleActive = {
      line: [
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
      ],
      title: [
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
        {
          bottom: 0,
          opacity: 1,
        },
      ],
    };

    const styles = reactive({
      line: [
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
      ],
      title: [
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
        {
          bottom: 0,
          opacity: 0,
        },
      ],
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
      state.borderBottomClass = 'border-bottom-animation-leave';
      state.navNameClass = 'nav-name-animation-leave';
      setTimeout(() => {
        styles.line = styleInit.line;
        styles.title = styleInit.title;
        setTimeout(() => {
          state.showNav = false;
          context.emit('showNav', state.showNav);
        }, 450);
      }, 0);
    };

    /** 开始显示导航栏面板 */
    const unfoldNav = () => {
      state.showNav = true;

      state.borderBottomClass = 'border-bottom-animation-enter';
      state.navNameClass = 'nav-name-animation-enter';
      setTimeout(() => {
        styles.line = styleActive.line;
        styles.title = styleActive.title;
      }, 0);
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
      styles,
      styleInit,
      styleActive,
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
/** bg */
.bg {
  z-index: 90;
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
  transition: opacity 0.39s ease-in-out -0.21s, transform 0.44s cubic-bezier(0.4, 0, 0.2, 1) -0.26s;
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
  /* display: none; */
  z-index: 100;
  position: fixed;
  width: 375px;
  height: 100vh;

  .placeholder {
    width: 375px;
    height: 45px;
    border-bottom: 1px solid rgba(68, 69, 83, 0.1);
  }

  .nav {
    width: 375px;
    height: 58px;
    padding: 20px 30px;
    position: relative;

    .nav-name {
      font-size: 16px;
      line-height: 21px;
      opacity: 0;
    }
    .nav-active {
      color: $linkColor;
    }

    .border-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 375px;
      height: 1px;
      background-color: rgba(68, 69, 83, 0.1);
      opacity: 0;
    }

    &:nth-of-type(2) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.21s, opacity 0.3s ease-in-out 0.21s;
      }
      .nav-name-animation-leave {
        transition: transform 0.35s ease-in-out 0.41s, opacity 0.2s ease-in-out 0.45s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.1s, opacity 0.2s ease-in-out 0.1s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.35s, opacity 0.2s ease-in-out 0.35s;
      }
    }
    &:nth-of-type(3) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.24s, opacity 0.3s ease-in-out 0.24s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.36s, opacity 0.2s ease-in-out 0.4s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.15s, opacity 0.2s ease-in-out 0.15s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.3s, opacity 0.2s ease-in-out 0.3s;
      }
    }
    &:nth-of-type(4) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.27s, opacity 0.3s ease-in-out 0.27s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.31s, opacity 0.2s ease-in-out 0.35s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.2s, opacity 0.2s ease-in-out 0.2s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.25s, opacity 0.2s ease-in-out 0.25s;
      }
    }
    &:nth-of-type(5) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.26s, opacity 0.2s ease-in-out 0.3s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.25s, opacity 0.2s ease-in-out 0.25s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.2s, opacity 0.2s ease-in-out 0.2s;
      }
    }
    &:nth-of-type(6) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.32s, opacity 0.3s ease-in-out 0.32s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.21s, opacity 0.2s ease-in-out 0.25s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.3s, opacity 0.2s ease-in-out 0.3s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.15s, opacity 0.2s ease-in-out 0.15s;
      }
    }
    &:nth-of-type(7) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.35s, opacity 0.3s ease-in-out 0.35s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.16s, opacity 0.2s ease-in-out 0.2s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.35s, opacity 0.2s ease-in-out 0.35s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.1s, opacity 0.2s ease-in-out 0.1s;
      }
    }
    &:nth-of-type(8) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.38s, opacity 0.3s ease-in-out 0.38s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.11s, opacity 0.2s ease-in-out 0.15s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.4s, opacity 0.2s ease-in-out 0.4s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0.05s, opacity 0.2s ease-in-out 0.05s;
      }
    }

    .border-bottom-animation-enter {
      opacity: 1;
    }

    .nav-name-animation-enter {
      opacity: 1;
    }
  }
}
</style>
