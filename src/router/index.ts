import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import scroll from '../utils/scroll';

const routes = [
  {
    path: '/',
    alias: '/index',
    name: 'home',
    component: Home,
  },
  {
    path: '/tool-animation',
    name: 'tool-animation',
    component: () => import('../views/ToolAnimation.vue'),
  },
  {
    path: '/tool-mindmap',
    name: 'tool-mindmap',
    component: () => import('../views/ToolMindmap.vue'),
  },
  {
    path: '/tool-iink',
    name: 'tool-iink',
    component: () => import('../views/ToolIink.vue'),
  },
  {
    path: '/tool-upscaler',
    name: 'tool-upscaler',
    component: () => import('../views/ToolUpscaler.vue'),
  },
  {
    path: '/device',
    name: 'device',
    component: () => import('../views/Device.vue'),
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('../views/Api.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // 走自定义平滑滚动
      scroll(to.hash);
    }
  },
});

// 跳转新页面时 从页面顶部显示
router.afterEach((from, to) => {
  if (from.hash === '') {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  }
});

export default router;
