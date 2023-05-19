import { createRouter, createWebHistory } from 'vue-router'
import TodoPage from '../views/TodoPage.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: TodoPage
    },
    {
      path: '/HomeView',
      name: 'Home',
      component: HomeView
    }
  ]
})

export default router
