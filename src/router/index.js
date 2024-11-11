import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
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
      component: ShopView
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
    }
  ]
})

export default router
