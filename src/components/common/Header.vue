<template>
  <div class="header">
    <!-- 导航栏开关 BEGIN -->
    <div
      class="icon-nav-wrapper"
      alt="nav"
      @click="clickNavHeader"
    >
      <!-- 导航栏开关·静止态·打开按钮 -->
      <div
        class="icon-lottie"
        ref="navOpen"
        v-show="state.btnOpen"
      ></div>
      <div
        class="icon-lottie"
        ref="navClose"
        v-show="!state.btnOpen"
      ></div>
    </div>
    <!-- 导航栏开关 END -->
    <div class="icon-xiaohui-wrapper">
      <img
        class="icon-xiaohui"
        src="/images/common/icon-xiaohui@2x.png"
        alt="xiaohui"
      />
      <img
        src="/images/common/icon-beta.svg"
        alt="beta"
        class="icon-beta"
      />
    </div>

    <!-- TODO: 如果新增工具，需要在下一行 对于activeIndex的判断里 增加新工具的索引 -->
    <div
      class="btn-try"
      v-show="state.showBtn && [1, 2, 3, 4].includes(state.activeIndex)"
    >
      <router-link
        :to="{ hash: '#copyUrl' }"
        append
      > 免费试用 </router-link>
    </div>
  </div>

  <div
    class="nav-list"
    v-show="state.showNav"
    @click="foldNav"
    @touchmove.stop="preventDefault"
  >
    <div class="placeholder"></div>
    <div
      class="nav"
      v-for="(item, index) in state.list"
      :key="item.name"
      @click="clickNav(index, item.link)"
    >
      <div
        :class="[state.navNameClass, 'nav-name', index == state.activeIndex ? 'nav-active' : '']"
        :style="{
          transform: 'translateY(' + styles.title[index].bottom + 'px)',
          opacity: styles.title[index].opacity,
        }"
      >
        {{ item.name }}
      </div>
      <div
        :class="['border-bottom', state.borderBottomClass]"
        :style="{ transform: 'translateY(' + styles.line[index].bottom + 'px)', opacity: styles.line[index].opacity }"
      ></div>
    </div>
  </div>

  <transition name="bg">
    <div
      class="bg"
      v-show="state.showNav"
    ></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, reactive } from 'vue';
import lottie from 'lottie-web';
import NavOpenLottie from '../../assets/lottie/navBtn/open.json';
import NavCloseLottie from '../../assets/lottie/navBtn/close.json';
import { useRoute, useRouter } from 'vue-router';
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
    /** 导航栏加载动画 */
    const navOpen = ref<HTMLDivElement>(null as unknown as HTMLDivElement); //导航栏打开按钮
    const navClose = ref<HTMLDivElement>(null as unknown as HTMLDivElement); //导航栏关闭按钮

    let navOpenController: any;
    let navCloseController: any;

    onMounted(() => {
      navOpenController = lottie.loadAnimation({
        container: navOpen.value,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: NavOpenLottie,
      });

      navCloseController = lottie.loadAnimation({
        container: navClose.value,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: NavCloseLottie,
      });
    });

    /** 页面状态管理 */
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
          name: '像素增强工具',
          link: '/tool-upscaler',
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
      btnOpen: true,
    });

    /** 导航栏 初始样式 */
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
        {
          bottom: -40,
          opacity: 0,
        },
      ],
    };

    /** 导航栏 点击样式 */
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
        {
          bottom: 0,
          opacity: 1,
        },
      ],
    };

    /** 导航栏 当前样式 */
    const styles = reactive({
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
        {
          bottom: -40,
          opacity: 0,
        },
      ],
    });

    /** 实时监听顶部是否需要显示按钮 */
    watch(props, newProps => {
      let showBtn: boolean = newProps.showBtn;
      state.showBtn = showBtn;
    });

    /** 实时监听导航栏是否为下拉状态 对应禁用滚动事件 */
    watch(
      () => state.showNav,
      curState => {
        if (curState === true) {
        } else {
        }
      }
    );

    /** 点击导航栏头部的响应事件 */
    const clickNavHeader = () => {
      state.showNav === true ? foldNav() : unfoldNav();
    };

    /**
     * 点击导航栏菜单时的响应事件
     */
    const router = useRouter();
    const route = useRoute();
    const clickNav = (index: number, link: string) => {
      state.activeIndex = index;
      setTimeout(() => {
        router.push({
          path: link,
        });
      }, 0);
    };

    /** 开始显示导航栏面板 */
    const unfoldNav = () => {
      state.btnOpen = true;
      state.showNav = true;

      /* 导航栏按钮 打开动画 开启 */
      navOpenController.play();
      navCloseController.stop();

      state.borderBottomClass = 'border-bottom-animation-enter';
      state.navNameClass = 'nav-name-animation-enter';
      setTimeout(() => {
        styles.line = styleActive.line;
        styles.title = styleActive.title;
      }, 150);
      context.emit('showNav', state.showNav);
    };

    /**
     * 关闭显示导航栏面板
     */
    const foldNav = () => {
      /* 导航栏按钮 关闭动画 开启 */
      state.btnOpen = false;
      navCloseController.play();
      navOpenController.stop();

      state.borderBottomClass = 'border-bottom-animation-leave';
      state.navNameClass = 'nav-name-animation-leave';
      setTimeout(() => {
        styles.line = styleInit.line;
        styles.title = styleInit.title;
        setTimeout(() => {
          state.showNav = false;
        }, 450);
      }, 0);
      context.emit('showNav', false);
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

    /**
     * 调转到小样模块
     */
    const toDemo = () => {
      state.showNav ? foldNav() : '';

      const scale = document.documentElement.clientWidth / 375;
      const height = [1860, 1950, 1900][state.activeIndex - 1];
      setTimeout(() => {
        window.scrollTo({
          top: height * scale,
          behavior: 'smooth',
        });
      }, 500);
    };

    /**
     * 导航栏全屏时 禁用滚动事件
     */
    const preventDefault = (e: any) => {
      e.preventDefault();
    };

    return {
      state,
      styles,
      styleInit,
      styleActive,
      navOpen,
      navOpenController,
      navClose,
      navCloseController,
      clickNavHeader,
      clickNav,
      foldNav,
      unfoldNav,
      routeChange,
      preventDefault,
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
  /* transition: opacity 0.39s ease-in-out -0.21s, transform 0.44s cubic-bezier(0.4, 0, 0.2, 1) -0.26s; */
  transition: opacity 0.5s ease-out -0.21s, transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) -0.26s;
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

  .icon-nav-wrapper {
    width: 44px;
    height: 44px;
    position: relative;
    .icon-lottie {
      width: 44px;
      height: 44px;
      padding: 0 10px;
      position: absolute;
      top: 0;
      object-fit: cover;
      transform: scale(0.7);

      svg {
        width: 24px;
        height: 24px;
      }
    }
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
    line-height: 12px;

    transition: all 0.2s ease-in-out;

    &:hover {
      border: 1px solid rgba(76, 104, 255, 0.5);
      background: rgba(255, 255, 255, 0.5);
    }
  }
}

.nav-list {
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

    &:nth-of-type(9) {
      .nav-name-animation-enter {
        transition: transform 0.3s ease-in-out 0.41s, opacity 0.3s ease-in-out 0.41s;
      }
      .nav-name-animation-leave {
        transition: transform 0.25s ease-in-out 0.06s, opacity 0.2s ease-in-out 0.1s;
      }
      .border-bottom-animation-enter {
        transition: transform 0.2s ease-in-out 0.45s, opacity 0.2s ease-in-out 0.45s;
      }
      .border-bottom-animation-leave {
        transition: transform 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
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
