import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../views/MemoriesPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: MemoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
