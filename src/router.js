import { createRouter, createWebHistory } from 'vue-router'
import TagsPage from './components/tagsPage.vue'
import LoginPage from './components/LoginPage.vue'
import ItemTag from './views/ItemTag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', components: {default: TagsPage}},
    {path: '/BreakfastOptions', component: ItemTag, props: {tag: 'Breakfast'}},
    {path: '/LunchOptions', component: ItemTag, props: {tag: 'Lunch'}},
    {path: '/login', component: LoginPage}

  ],
})

export default router