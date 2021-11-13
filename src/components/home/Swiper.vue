<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

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
  scale: document.documentElement.clientWidth / 375,
});

/** 自定义分页样式 */
const myPagination = {
  bulletActiveClass: 'swiper-pagination-active',
  bulletClass: 'swiper-pagination-normal',
  type: 'bullets',
};
</script>

<template>
  <swiper :pagination="true" :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="15" class="mySwiper">
    <swiper-slide class="card-wrapper" v-for="artist in artists" :key="artist.name">
      <div class="card">
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
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.mySwiper {
  width: 375px;
  height: 386px;
  overflow: visible;
}

.card-wrapper {
  width: 315px;
  height: 346px;

  .card {
    width: 315px;
    height: 346px;
    background: #ffffff;
    background-clip: border-box;
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
</style>

<style>
.swiper-wrapper {
  width: 375px;
  height: 346px;
}
.swiper-pagination {
  bottom: -8px !important;
}
.swiper-pagination-bullet {
  background: #d8d8d8;
  background-clip: content-box;
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-sizing: content-box;
  padding: 0 8px;
  margin: 0 !important;
}
.swiper-pagination-bullet-active {
  background: #9a9a9a;

  background-clip: content-box;
  opacity: 1;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
