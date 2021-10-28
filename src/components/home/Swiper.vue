<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
const artists = [
  {
    quatation: 'home/icon-quatation-1@2x.png',
    words:
      '小绘的诞生展现了AI在设计领域的无限潜能，她不仅提升了设计效率，同时也帮助设计师更具创造力，从而孕育出一种人机共生的新创造力',
    title: '香港浸会大学助理教授',
    name: '金昱成',
    avatar: 'home/avatar-yucheng@2x.png',
  },
  {
    quatation: 'home/icon-quatation-2@2x.png',
    words:
      '这是款很酷且有生命力的产品，基于图像智能生成技术的小绘，有着无限生成能力，一定会让你有意想不到的收获，AI赋能使设计变得更高效',
    title: '百度视觉设计师',
    name: 'Nana',
    avatar: 'home/avatar-nana@2x.png',
  },
  {
    quatation: 'home/icon-quatation-3@2x.png',
    words: '完美的帮助设计师“与机器对话”，与AI共同寻找灵感的旅程真的很棒',
    title: '字节跳动高级设计师',
    name: '陈子豪',
    avatar: 'home/avatar-zihao@2x.png',
  },
];
/**
 * 工具函数 获取图片路由 vite专属:(
 */
const getImageUrl = function (name: string) {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};
const state = reactive({
  activeIndex: 0,
  timer: 0,
  offsetX: 15,
  offsetXtmp: 15,
  pageX: 0,
  isScrolling: false,
});
/**
 * 监听轮播图横向偏移量 更新activeIndex
 */
watch(
  () => state.offsetX,
  (x: number) => {
    // 卡片消失1/3时 认为切换到下一个卡片
    if (x <= 15 && x > -120) {
      state.activeIndex = 0;
    } else if (x <= -120 && x > -420) {
      state.activeIndex = 1;
    } else {
      state.activeIndex = 2;
    }
  }
);
/**
 * 监听滚动事件开始时 重置pageX
 */
const resetOffsetX = (e: any) => {
  state.pageX = e.touches[0].pageX;
  state.offsetXtmp = state.offsetX;
  state.isScrolling = true;
};
/**
 * 获取滚动时的偏移量
 */
const getOffsetX = (e: any) => {
  let curpageX = e.touches[0].pageX;
  let offsetX = curpageX - state.pageX; //本次偏移量
  state.offsetX = Math.max(Math.min(state.offsetXtmp + offsetX, 15), -640); //约束偏移量在[-640,15]
};
/**
 * 触摸结束时 根据当前偏移量 计算磁性吸附值 并更新底部点点的更新值
 */
const endOffsetX = (e: any) => {
  if (state.offsetX <= 15 && state.offsetX > -120) {
    state.offsetX = 15;
  } else if (state.offsetX <= -120 && state.offsetX > -420) {
    state.offsetX = -315;
  } else {
    state.offsetX = -640;
  }
  state.isScrolling = false;
};
/**
 * 销毁定时器
 */
const clearFunction = () => {
  clearInterval(state.timer);
};
/**
 * 实例挂载完成后执行自动轮播
 */
onMounted(() => {
  // autoPlay();
});
/**
 * 实例注销时销毁定时器
 */
onBeforeUnmount(() => {
  clearFunction();
});
</script>

<template>
  <div class="swiper" @touchend="endOffsetX">
    <div class="swiper-wrapper">
      <div
        class="cards-wrapper"
        :style="{
          transform: 'translateX(' + state.offsetX + 'px)',
          transition: state.isScrolling ? '' : 'transform 1s ease-in-out',
        }"
        @touchstart="resetOffsetX"
        @touchmove="getOffsetX"
      >
        <div class="card" v-for="artist in artists" :key="artist.name">
          <img :src="getImageUrl(artist.quatation)" class="icon-quatation" />
          <div class="words">{{ artist.words }}</div>
          <div class="artist">
            <div class="intro">
              <p>{{ artist.title }}</p>
              <p>{{ artist.name }}</p>
            </div>
            <img :src="getImageUrl(artist.avatar)" alt="avatar" class="avatar" />
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-dots-wrapper">
      <div class="swiper-dots">
        <div
          :class="['dot', state.activeIndex == index ? 'dot-active' : '']"
          v-for="index in [0, 1, 2]"
          :key="index"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 375px;
  overflow: hidden;
}
.swiper-wrapper {
  width: 375px;
  height: 386px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  overflow-x: hidden;

  padding: 0 15px;

  .cards-wrapper {
    width: 975px;
    height: 346px;
    display: flex;
    justify-content: space-between;

    .card {
      width: 315px;
      height: 346px;
      background: #ffffff;
      box-shadow: 0px -2px 20px 0px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
      padding: 30px 30px 55px 30px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .icon-quatation {
        width: 25px;
        height: 28px;
        align-self: flex-start;
      }

      .words {
        width: 255px;
        height: 140px;
        font-size: 16px;
        line-height: 28px;
      }

      .artist {
        align-self: flex-end;
        width: 220px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .intro {
          width: 153px;
          height: 38px;
          font-size: 14px;
          line-height: 19px;
          text-align: right;
        }

        .avatar {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}
.swiper-dots-wrapper {
  width: 375px;
  height: 10px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  .swiper-dots {
    width: 62px;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 10px;

      background: #d8d8d8;
    }

    .dot-active {
      background: #9a9a9a;
    }
  }
}
</style>
