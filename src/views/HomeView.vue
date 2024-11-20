<script setup>
import Button from '@/components/ui/button/Button.vue'
import { ref } from 'vue'
import {
    Card,
    CardContent,
    CardHeader,
  } from '@/components/ui/card'

import BlueKandi from '@/assets/images/Products/BlueKandi/BlueKandi1.jpg'
import PinkKandi from '@/assets/images/Products/PinkKandi/PinkKandi1.webp'
import MeshCommunicator from '@/assets/images/Products/MeshCom/MeshCommunicator1.webp'

const featuredProducts = [
  {
    id: 1,
    name: 'Pink Sparkle Kandi',
    price: 10.00,
    image: PinkKandi,
    category: 'Kandi Bracelet',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'FestiFriend Communicator',
    price: 99.99,
    image: MeshCommunicator,
    category: 'Mesh Communicator',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Amethyst Purple Kandi',
    price: 10.00,
    image: BlueKandi,
    category: 'Kandi Bracelet',
    tag: 'Popular'
  }
]

const emailAddress = ref('')

const handleNewsletterSubmit = () => {
  console.log('Newsletter subscription:', emailAddress.value)
  emailAddress.value = ''
}
</script>

<template>
  <!-- Hero Banner Section -->
  <section class="relative h-[250px] sm:h-[300px] md:h-[400px] w-full bg-black text-center text-white overflow-hidden">
    <img 
      src="@/assets/images/pages/hero-banner.jpg" 
      class="absolute inset-0 w-full h-full object-cover opacity-50"
      alt="Festival banner"
    >
    <div class="absolute inset-0 flex items-center justify-center px-4">
      <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-6xl">
        Forge New lasting Friendships at Festivals!
      </h1>
    </div>
  </section>

  <!-- Main Hero Section -->
  <div class="bg-gradient-to-tr from-amber-50 via-red-100 to-amber-200 px-4 md:px-8 lg:px-16 xl:px-24">
    <section class="container mx-auto pt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
            Spark New Connections at Every Festival!
          </h1>
          <h3 class="text-xl md:text-2xl text-gray-800">
            Share Your Moments with <span class="text-pink-500">#FestiFriend!</span>
          </h3>
          <p class="text-base md:text-lg text-gray-600">
            Discover our unique collection of festival accessories that help you make lasting connections.
          </p>
          <RouterLink to="/shop">
            <Button size="lg" class="text-lg px-8 mt-4 bg-gradient-to-t from-blue-500 to-cyan-500 hover:opacity-75 text-white py-6">
              Shop Now →
            </Button>
          </RouterLink>
        </div>
        <div class="w-full">
          <img 
            src="@/assets/images/pages/Hero-section.png" 
            alt="Hero image"
            class="w-full h-auto object-contain "
          >
        </div>
      </div>
    </section>
  </div>

  <!-- Promotional Banner -->
  <section class="bg-gradient-to-b from-fuchsia-400 to-purple-700 text-white py-12">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-6">Special Offer!</h2>
      <p class="text-lg md:text-xl mb-8">
        Get 30% Off on Mesh Communicator. Plus Pay in 4 interest-free installments for orders over $50.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
          <h3 class="font-bold text-2xl mb-2">30% OFF</h3>
          <p>On Mesh Communicator</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
          <h3 class="font-bold text-2xl mb-2">4 Payments</h3>
          <p>Interest-free with Shop Pay</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
          <h3 class="font-bold text-2xl mb-2">Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
      </div>
      <RouterLink to="/shop">
        <Button size="lg" class="text-lg px-8 bg-gradient-to-t from-pink-500 to-rose-500 hover:opacity-75 text-white py-6">
          Explore Offers →
        </Button>
      </RouterLink>
    </div>
  </section>

  <!-- Featured Products -->
  <section class="bg-gradient-to-b from-teal-100 via-cyan-200 to-indigo-200 py-16">
    <div class="max-w-7xl container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">Featured Products</h2>
      <p class="text-lg md:text-xl text-gray-600 text-center mb-12">
        Our Bestselling, popular and new Arrivals!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div v-for="product in featuredProducts" :key="product.id" 
             class="bg-white p-3 rounded-xl shadow-lg cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div class="relative">
            <img :src="product.image" :alt="product.name" class="w-full rounded-xl h-64 object-cover">
            <span class="absolute top-4 right-4 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
              {{ product.tag }}
            </span>
          </div>
          <div class="p-4">
            <span class="text-gray-500 mb-2 rounded-full text-sm font-medium">{{ product.category }}</span>
            <h3 class="text-xl font-bold mb-1 text-gray-900">{{ product.name }}</h3>
            <p class="text-[#2a9d8f] font-bold text-lg mt-0 mb-2">${{ product.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Newsletter Section -->
  <section class="bg-gradient-to-r from-blue-950 to-blue-900 py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-center md:text-left">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">Sign Up For Newsletters</h2>
          <p class="text-gray-300">
            Get E-mail updates about our latest shop and 
            <span class="text-yellow-400">special offers.</span>
          </p>
        </div>
        <form @submit.prevent="handleNewsletterSubmit" 
              class="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            v-model="emailAddress"
            placeholder="Your email address" 
            required
            class="flex-grow px-4 py-3 rounded-lg border-2 border-transparent focus:border-teal-500 focus:ring-0 min-w-[280px] sm:min-w-[320px] lg:min-w-[400px]"
          />
          <Button 
            type="submit"
            class="px-6 py-7 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors duration-300 whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>