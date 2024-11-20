import Login from '@/auth/Login/Login.vue'
import Register from '@/auth/Register/Register.vue'
import AboutView from '@/views/AboutView.vue'
import AccountPage from '@/views/AccountPage.vue'
import CartPage from '@/views/CartPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import RefundPolicy from '@/views/footer-pages/RefundPolicy.vue'
import privacyPolicy from '@/views/footer-pages/privacy-policy.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'


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
      component: ContactPage
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
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
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountPage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/auth/login');
  } else {
    next();
  }
});

export default router
