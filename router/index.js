import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
    path: '/quiz',
    name: 'quiz',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Quiz.vue')
    },
    {
      path: '/quiz2',
      name: 'quiz2',
      component: () => import('../views/Quiz2.vue')
    },
    {
      path: '/quiz3a',
      name: 'quiz3a',
      component: () => import('../views/Quiz3a.vue')
    },
    {
      path: '/quiz3b',
      name: 'quiz3b',
      component: () => import('../views/Quiz3b.vue')
    }
  ]
})

export default router
