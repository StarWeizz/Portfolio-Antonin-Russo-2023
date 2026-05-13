import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectsArchivePage from '../pages/ProjectsArchivePage.vue'
import ProjectDetailPage from '../pages/ProjectDetailPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsArchivePage },
  { path: '/projects/:slug', component: ProjectDetailPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})
