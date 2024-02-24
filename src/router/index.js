import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hiring from '@/components/Hiring.vue'
import ListStaff from '@/views/ListStaff.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hiring',
    name: 'Hiring',
    component: Hiring,
   
    },
    {
      path: '/liststaff',
      name: 'liststaff',
      component: ListStaff
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
