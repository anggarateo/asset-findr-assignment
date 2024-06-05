import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
import Home from '@/pages/home.vue'
import Error404 from '@/pages/error404.vue'
import Asset from '@/pages/asset/index.vue'
import Add from '@/pages/asset/add.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/asset',
    meta: {
      title: 'Manage Asset'
    },
    children: [
      {
        path: '',
        component: Asset
      },
      {
        path: 'add',
        component: Add
      }
    ]
  },
  {
    path: '/404',
    component: Error404,
    meta: {
      title: 'Error 404'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'bg-gray-200',
  linkExactActiveClass: 'bg-gray-200'
})

export default router
