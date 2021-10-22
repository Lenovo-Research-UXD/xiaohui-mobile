<template>
  <div class="historys-wrapper">
    <div class="title">历程</div>
    <div class="historys">
      <div class="history" v-for="item in history" :key="item.date">
        <div class="date">{{ item.date }}</div>
        <div class="label">{{ item.label }}</div>
        <div class="detail">{{ item.detail }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "History",
  setup() {
    const history = [
      {
        date: "2019.03",
        label: "我们的第一步",
        detail:
          "2160小时训练时长、70000+样本标注、20+种算法尝试，我们在不断探索未来设计",
      },
      {
        date: "2019.09",
        label: "出厂质检合格",
        detail:
          "在小绘作品与设计师的作品的盲测中， 46.3% vs 53.7%，无显著的统计差异",
      },
      {
        date: "2019.11",
        label: "第一次公开亮相",
        detail: "小绘智能设计在TechWorld展会中曝光，成为现场的流量明星",
      },
      {
        date: "2020.01",
        label: "首次对外合作",
        detail: "与阳光雨露合作，小绘智能设计帮助其线下门店提升获客率",
      },
      {
        date: "2020.09",
        label: "首次对外合作+1",
        detail: "Yoga Book 14s官方新品发布视频应用小绘智能设计素材",
      },
      {
        date: "2020.10",
        label: "小作坊升级了",
        detail: "自研全新的智能设计工具，丰富设计师的创造力",
      },
      {
        date: "2020.11",
        label: "试水学术圈",
        detail: "以智能设计工具为课题的论文被IUI的HAI-GEN workshop接受",
      },
      {
        date: "2020.12",
        label: "来设计周凑热闹",
        detail: "小绘智能设计的风格画屏智能互动装置亮相北京设计周",
      },
      {
        date: "2021.02",
        label: "获了个小奖",
        detail: "智能设计工具在2020年获得了DIA智造设计大奖",
      },
      {
        date: "2021.04",
        label: "首次与大牌合作",
        detail: "小绘智能设计作品成为motorola edge s手机官方壁纸",
      },
    ];
    return {
      history,
    };
  },
});
</script>

<style lang="scss" scoped>
.historys-wrapper {
  width: 296px;
  height: 1712px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    @include title;
    width: 146px;
    height: 31px;
  }

  .historys {
    width: 296px;
    height: 1613px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .history {
      width: 296px;
      height: 98px;
      position: relative;

      .date {
        @include commonText;
      }

      .label {
        height: 40px;
        padding: 6px 0 12px 0;
        @include commonText;
        color: rgba(34, 45, 73, 1);
      }

      .detail {
        @include commonText;
      }

      &::after {
        content: "";
        width: 2px;
        height: 40px;
        background-color: $textColor;
        position: absolute;
        bottom: -56px;
      }

      &:last-of-type::after {
        content: "";
        width: 0px;
        height: 0px;
        background-color: $textColor;
        position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>
