<template>
  <div class="banner">
    <img
      src="/images/about/group-cheerful-friends@2x.png"
      alt="group-cheerful-friends"
      class="group-photo"
    />
    <div class="content">
      <div class="intro">
        <p>
          我们是联想研究院UXD团队，创造了XiaoHui
          小绘，它既是品牌IP形象的名字，也是我们打造的一款同名智能设计工具集。
          我们持续追踪人工智能的最新技术，将它引入设计领域，让最新最酷的科技点燃你的创造力。
        </p>
        <p>
          我们希望创造更多让设计师充满惊喜和愉悦的使用体验，让设计师的工作更加轻松，在人工智能时代发现更多可能。
        </p>
      </div>
      <img src="/images/common/icon-uxd.svg" alt="uxd" class="icon-uxd" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Banner",
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  .group-photo {
    width: 100vw;
    height: 220px;
  }

  .content {
    width: 100vw;
    height: 360px;
    padding: 30px 30px 48px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    .intro {
      width: 315px;
      height: 171px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    p {
      @include commonText;
    }

    .icon-uxd {
      width: 128px;
      height: 50px;
    }
  }
}
</style>
