<script lang="ts">
import Video from '../common/Video.vue';
import CopyUrl from '../../components/common/CopyUrl.vue';
import Card from '../common/Card.vue';
import DemoVideo from './DemoVideo.vue';
import DemoImage from './DemoImage.vue';

import { ToolLayout, ToolCard } from '../../types/index';
import { defineComponent, onMounted, PropType, reactive } from 'vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Video: Video,
    CopyUrl: CopyUrl,
    Card: Card,
    DemoVideo: DemoVideo,
    DemoImage: DemoImage,
  },
  props: {
    tool: {
      type: Object as PropType<ToolLayout>,
      default: null,
    },
  },
  setup(props) {
    const tools: Array<ToolCard> = [
      {
        title: '流体动画工具',
        description: '前所未见的流体动态素材，自由连接，一气呵成',
        cover: 'common/cover-animation@2x.png',
        link: '/tool-animation',
      },
      {
        title: '创意脑图工具',
        description: '突破传统的创意拓展工具，智能编辑，随心所欲',
        cover: 'common/cover-mindmap@2x.png',
        link: '/tool-mindmap',
      },
      {
        title: '智绘水墨工具',
        description: '大师级的水墨创意设计，高清细节，随心而韵',
        cover: 'common/cover-iink@2x.png',
        link: '/tool-iink',
      },
    ];

    const state = reactive({
      tool: props.tool,
      copyUrlMsg: '免费下载壁纸',
      otherTools: tools,
    });

    const getImageUrl = (name: string) => {
      return new URL(`../../assets/images/${name}`, import.meta.url).href;
    };

    /**
     * 其余工具信息 - 通过比对所有tools的title是否与props中传入的当前tool.title一致
     * @return otherTools
     */
    const otherTools = () => {
      state.otherTools = tools.filter(cur => {
        return cur.title != props.tool.title;
      }) as Array<ToolCard>;
    };

    onMounted(() => {
      otherTools();
    });

    /** test */
    const log = () => {
      console.log('clicked');
    };

    return {
      state,
      getImageUrl,
      log,
    };
  },
});
</script>

<template>
  <div class="layout">
    <!-- 顶部视频 -->
    <div class="banner-wrapper">
      <Video :video="state.tool.video" :cover="state.tool.cover"></Video>
    </div>
    <!-- 链接入口 -->
    <div class="link-wrapper">
      <img src="/images/common/icon-xiaohui-grey.svg" alt="xiaohui" class="icon-xiaohui" />
      <div class="title">
        <pre>{{ state.tool.title }}</pre>
      </div>
      <div class="description">
        <pre>{{ state.tool.description }}</pre>
      </div>

      <div class="btn-more" @click="log">
        <router-link :to="{ hash: '#copyUrl' }" append> 免费试用 </router-link>
      </div>
    </div>
    <!-- 三组介绍图文 -->
    <div class="details-wrapper">
      <div class="detail-wrapper" v-for="item in state.tool.details" :key="item.title">
        <img :src="getImageUrl(item.cover)" alt="tool-detail" />
        <div class="title">
          <pre>{{ item.title }}</pre>
        </div>
        <div class="description">
          <pre>{{ item.description }}</pre>
        </div>
      </div>
    </div>
    <!-- demo试用模块 -->
    <div class="demo-wrapper" id="demo">
      <DemoVideo
        v-if="state.tool.title == '流体动画工具'"
        :toolName="state.tool.title"
        :assets="state.tool.assets"
      ></DemoVideo>
      <DemoImage v-else :toolName="state.tool.title" :images="state.tool.images"></DemoImage>
    </div>
    <!-- 复制链接 -->
    <div class="copyurl-wrapper" id="copyUrl">
      <CopyUrl :msg="state.copyUrlMsg"></CopyUrl>
    </div>
    <!-- 其它工具卡片 -->
    <div class="card-wrapper">
      <Card
        v-for="tool in state.otherTools"
        :title="tool.title"
        :description="tool.description"
        :link="tool.link"
        :cover="getImageUrl(tool.cover)"
        :key="tool.title"
      ></Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 375px;
  background: $backgroundColor;

  .banner-wrapper {
    width: 375px;
    height: 212px;
  }

  .link-wrapper {
    width: 375px;
    height: 230px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon-xiaohui {
      width: 36px;
      height: 8px;
      position: relative;
      left: -54px;
    }

    .title {
      @include title;
      width: 144px;
      height: 31px;
      text-align: center;
    }

    .description {
      @include description;
      width: 198px;
      height: 80px;
      padding: 8px 0 30px 0;
      text-align: center;
    }
  }

  .details-wrapper {
    width: 375px;
    /* height: 1353px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .detail-wrapper {
      width: 375px;
      padding: 50px 50px 70px 50px;
      background: #eaedf4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 20px 0;

      img {
        width: 315px;
        height: 186px;
      }

      .title {
        @include title;
        margin: 30px 0 8px 0;
        text-align: center;
      }

      .description {
        @include description;
        width: 315px;
        /* height: 42px; */
        text-align: center;
      }
    }
  }

  .demo-wrapper {
    width: 375px;
    height: 334px;
    padding-top: 40px;
  }

  .copyurl-wrapper {
    width: 375px;
    height: 372px;
    padding: 100px 0;
  }

  .card-wrapper {
    width: 375px;
    height: 1040px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
