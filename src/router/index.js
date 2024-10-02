import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'
import Portfolio from '../pages/Portfolio.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'
import Error404 from '../pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/dettaglio-project/:slug',
      name: 'ProjectDetails',
      component: ProjectDetails
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
  ]
})

export default router
