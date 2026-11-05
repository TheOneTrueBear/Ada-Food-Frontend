import { createRouter, createWebHistory } from 'vue-router'
import TagsPage from './components/tagsPage.vue'
import BreakfastTag from './components/BreakfastTag.vue'
import PublicNavBar from './components/PublicNavBar.vue'
import LoginPage from './components/LoginPage.vue'
import LunchTag from './components/LunchTag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', components: {default: TagsPage, nav: PublicNavBar}},
    {path: '/BreakfastOptions', components: {default: BreakfastTag, nav: PublicNavBar}},
    {path: '/LunchOptions', components: {default: LunchTag, nav: PublicNavBar}},
    {path: '/login', components: {default: LoginPage}}

  ],
})

export default router