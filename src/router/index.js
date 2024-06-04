import { createRouter, createWebHistory } from 'vue-router';
import BookDetail from '../pages/BookDetail.vue';
import ShoppingCart from '@/pages/ShoppingCart.vue';
import CheckoutDetail from '@/pages/CheckoutDetail.vue';
import OrderConf from '@/pages/Order.vue';

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/detail/:id', name: 'BookDetail', component: BookDetail },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/checkout', name: 'Checkout', component: CheckoutDetail },
  { path: '/orderconfirmation', name: 'Order', component: OrderConf },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../pages/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
