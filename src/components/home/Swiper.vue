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
  pageX: 0,
});
/**
 * 监听activeIndex 更新轮播图横向偏移量
 */
watch(
  () => state.activeIndex,
  (index: number) => {
    state.offsetX = -(330 * state.activeIndex) + 15;
  }
);
/**
 * 定时轮播
 */
const autoPlay = () => {
  state.timer = setInterval(() => {
    //轮播逻辑
    state.activeIndex = (state.activeIndex + 1) % 3;
  }, 6000);
};

/**
 * 点击轮播图底部点点时的响应事件 切换轮播点点
 */
const changeArtist = (index: number) => {
  clearInterval(state.timer);
  state.activeIndex = index;
};

/**
 * 监听滚动事件开始时 重置pageX
 */
const resetOffset = (e: any) => {
  state.pageX = e.touches[0].pageX;
};
/**
 * 获取滚动时的偏移量
 */
const getOffsetX = (e: any) => {
  let curpageX = e.touches[0].pageX;
  console.log('scroll', (curpageX - state.pageX) / 3);
  state.offsetX = (curpageX - state.pageX) / 3 + 15;
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
  <div class="swiper">
    <div class="swiper-wrapper">
      <div
        class="cards-wrapper"
        :style="{ transform: 'translateX(' + state.offsetX + 'px)' }"
        @touchstart="resetOffset"
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
          @click="changeArtist(index)"
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

  overflow-x: scroll;

  padding: 0 15px;

  .cards-wrapper {
    width: 975px;
    height: 346px;
    display: flex;
    justify-content: space-between;

    /* transition: transform 2s ease-in-out; */
    /* overflow-x: scroll; */

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
