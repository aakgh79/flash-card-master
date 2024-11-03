import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/Home.vue'
import AddWordView from "../Views/AddWord.vue"
import EnglishExamView from "../Views/EnglishExam.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/English-exam',
      name: 'English-exam',
      component: EnglishExamView
    },
    {
      path: '/',
      name: 'Home',
      component:HomeView
    },
    {
        path: '/Add-Word',
        name: ' AddWord',
        component:AddWordView
      },
  ]
})

export default router
