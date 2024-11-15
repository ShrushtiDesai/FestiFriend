import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import RefundPolicy from '@/views/footer-pages/RefundPolicy.vue'
import privacyPolicy from '@/views/footer-pages/privacy-policy.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: AboutView
    },
    {
      path: '/account',
      name: 'Account',
      component: AboutView
    },
    {
      path: '/pages/festifriend-privacy-policy',
      name: 'Privacy Policy',
      component: privacyPolicy
    },
    {
      path: '/pages/terms-of-service-for-festifriend',
      name: 'Terms of Service',
      component: privacyPolicy
    },
    {
      path: '/pages/return-policy',
      name: 'Refund Policy',
      component: RefundPolicy
    },
    {
      path: '/product/:id',
      name: 'SingleProduct',
      component: SingleProduct,
      props: (route) => ({
        id: parseInt(route.params.id),
        name: route.query.name
      })
    }
  ]
})

export default router
