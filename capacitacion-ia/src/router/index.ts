import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import PresentationView from '../views/PresentationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/presentacion',
      name: 'presentation',
      component: PresentationView,
    },
  ],
})

export default router
