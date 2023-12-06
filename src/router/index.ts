import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarrerView.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
  },
  {
    path: '/post/:slug',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostView.vue')
  },
  {
    path: '/editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
