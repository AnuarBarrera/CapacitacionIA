import { createRouter, createWebHistory } from 'vue-router'
import PresentationView from '../views/PresentationView.vue'
import DesignSystemView from '../views/DesignSystemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'design-system',
      component: DesignSystemView,
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: PresentationView,
    },
  ],
})

export default router
