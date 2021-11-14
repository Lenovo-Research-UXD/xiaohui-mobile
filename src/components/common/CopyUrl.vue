<template>
  <div class="wrapper">
    <img src="/images/common/icon-web-pc.svg" alt="web-pc" class="icon-web-pc" />
    <div class="content">
      <p>{{ msg }}，请在电脑端访问</p>
      <p>xiaohui.ai</p>
    </div>
    <div class="btn-copyurl" @click="copyUrl">复制链接</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';
export default defineComponent({
  name: 'CopyUrl',
  props: {
    msg: {
      type: String,
      default: '免费试用设计工具',
    },
  },
  setup() {
    const copyUrl = async function () {
      const clipboardObj = navigator.clipboard;
      const url = 'xiaohui.ai';
      if (clipboardObj) {
        await clipboardObj.writeText(url);
        alert('链接已复制');
      } else {
        alert('该浏览器不支持剪切板操作，请手动复制xiaohui.ai');
      }
    };
    return {
      copyUrl,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 375px;
  height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-web-pc {
    width: 80px;
    height: 56px;
  }

  .content {
    width: 375px;
    height: 73px;
    padding: 12px 0 19px 0;
    opacity: 0.8;

    p {
      width: 375px;
      font-size: 16px;
      font-weight: bold;
      line-height: 21px;
      text-align: center;
      color: #222d49;
    }
  }

  .btn-copyurl {
    width: 100px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid rgba(76, 104, 255, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;
    @include link;
  }
}
</style>
