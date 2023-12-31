import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'    // 首页
import TemplateSyntax from '../views/TemplateSyntax.vue'   // 模板语法
import ConditionalRendering from '../views/ConditionalRendering.vue'  // 条件渲染
import ListRendering from '../views/ListRendering.vue'  //列表渲染

const base = (process.env.NODE_ENV === "development" ? "/" : "/cyx/"); 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TemplateSyntax',
      name: 'TemplateSyntax',
      component: TemplateSyntax
    },
    {
      path: '/ConditionalRendering',
      name: 'ConditionalRendering',
      component: ConditionalRendering
    },
    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: ListRendering
    }

  ]
})

export default router
