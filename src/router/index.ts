import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '../views/BlogView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/posts/20230401',
      name: 'FirstPost',
      component: () => import('../views/posts/FirstPost.vue'),
    },
    {
      path: '/posts/20230402',
      name: '2ndPost',
      component: () => import('../views/posts/2ndPost.vue'),
    },
  ],
});

export default router;
