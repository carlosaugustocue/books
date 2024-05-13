
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import BookDetail from '../pages/BookDetail.vue'
import ShoppingCart from '@/pages/ShoppingCart.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/detail/:id',
    name: 'BookDetail',
    component: BookDetail,
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // Asegúrate de pasar las rutas a createRouter
})

export default router
