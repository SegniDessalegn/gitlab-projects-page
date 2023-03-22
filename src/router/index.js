import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'projects',
    component: Projects
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
