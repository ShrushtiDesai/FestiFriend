<script setup>
import Autoplay from 'embla-carousel-autoplay'
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'

import BlueKandi from '@/assets/images/Products/BlueKandi.jpg'
import PinkKandi from '@/assets/images/Products/PinkKandi.webp'
import MeshCommunicator from '@/assets/images/Products/MeshCommunicator.webp'

const featuredProducts = [
  {
    id: 1,
    name: 'Pink Sparkle WristBand',
    price: 10.00,
    image: PinkKandi,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Mesh Communicator',
    price: 99.99,
    image: MeshCommunicator,
    tag: 'New'
  },
  {
    id: 3,
    name: 'Amethyst Purple Kandi',
    price: 10.00,
    image: BlueKandi,
    tag: 'Popular'
  }
]

const emailAddress = ref('')

const handleNewsletterSubmit = () => {
  // Handle newsletter submission
  console.log('Newsletter subscription:', emailAddress.value)
  emailAddress.value = ''
}
</script>

<template>
  <section class="banner relative text-center text-white bg-black">
    <img 
      src="@/assets/images/pages/hero-banner.jpg" 
      class="w-full h-full object-cover opacity-[0.5]"
      alt="Festival banner"
    >
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
      <h1 class="banner-text font-bold">
        Forge New lasting Friendships at Festivals!
      </h1>
    </div>
  </section>

  <div class="hero-section bg-[#e8e0ce] pb-0 px-4 justify-between md:px-0 lg:px-10 xl:px-20">
    <section class="container pt-8 pb-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <h1 class="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Spark New Connections at Every Festival!
          </h1>
          <h3 class="text-xl md:text-2xl">Share Your Moments with <span class="text-[#ff55a3]">#FestiFriend!</span></h3>
          <p class="text-base md:text-lg text-gray-600">
            Discover our unique collection of festival accessories that help you make lasting connections.
          </p>
          <RouterLink to="/shop">
            <Button size="lg" class="text-lg px-8 bg-[#ff9900] py-6 my-8 hover:bg-[#fdb01a]">
              Shop Now  >
            </Button>
          </RouterLink>
        </div>
        
        <!-- Right Image -->
        <div class="w-full h-full flex">
          <img 
            src="@/assets/images/pages/Hero-section.png" 
            alt="Hero image"
            class="w-full h-auto transform"
          >
        </div>
      </div>
    </section>
  </div>

  <!-- Promotional Banner -->
  <section class="bg-[#75574e] text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Special Offer!</h2>
        <p class="text-xl mb-6">
          Get 30% Off on Mesh Communicator. Plus Pay in 4 interest-free installments for orders over $50.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">30% OFF</h3>
            <p>On Mesh Communicator</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">4 Payments</h3>
            <p>Interest-free with Shop Pay</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
        </div>
        <RouterLink to="/shop" class="justify-center">
            <Button size="lg" class="text-lg px-8 align-center bg-[#ff9900] py-8 my-6 hover:bg-[#fdb01a]">
            Explore Offers > 
          </Button>
          </RouterLink>
      </div>
    </section>

        <!-- Featured Products -->
    <section class="bg-[#f0e4c0] py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center">Featured Products</h2>
        <p class="text-xl text-[gray] text-center mb-12">Our Bestselling, popular and new Arrivals!</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          <div v-for="product in featuredProducts" :key="product.id" 
               class="bg-[#f6f4ec] rounded-lg shadow-md p-4 overflow-hidden transition-transform hover:scale-105">
            <div class="relative">
              <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover rounded-lg">
              <span class="absolute top-4 right-4 bg-[#28293d] text-white px-3 py-1 rounded-full text-sm">
                {{ product.tag }}
              </span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">${{ product.price }}</p>
              <Button class="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <!-- Newsletter Section -->
  <section class="newsletter-section bg-[#001f3f] py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-white">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">Sign Up For Newsletters</h2>
          <p class="text-gray-300">
            Get E-mail updates about our latest shop and 
            <span class="text-[#ffd700]">special offers.</span>
          </p>
        </div>
        
        <form @submit.prevent="handleNewsletterSubmit" 
              class="w-full md:w-auto flex flex-col sm:flex-row gap-5">
          <input 
            type="email" 
            v-model="emailAddress"
            placeholder="Your email address" 
            required
            class="flex-grow px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-teal-500 min-w-[300px] lg:min-w-[400px]"
          />
          <button 
            type="submit"
            class="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>

.banner {
  height: 400px;
  z-index: -1;
}

.banner-text {
  font-size: 70px;
  line-height: 1.2;
}

/* Large devices (laptops/desktops) */
@media (max-width: 1024px) {
  .banner-text {
    font-size: 60px;
  }
}

/* Medium devices (tablets) */
@media (max-width: 768px) {
  .banner {
    height: 300px;
  }
  
  .banner-text {
    font-size: 40px;
  }
}

/* Small devices (mobile phones) */
@media (max-width: 480px) {
  .banner {
    height: 250px;
  }
  
  .banner-text {
    font-size: 28px;
  }
}
</style>