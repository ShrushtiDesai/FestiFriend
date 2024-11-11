<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'


const featuredProducts = [
  {
    id: 1,
    name: 'Mesh Communicator',
    price: 49.99,
    image: '/products/mesh-communicator.jpg',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Rainbow LED Badge',
    price: 29.99,
    image: '/products/rainbow-led-badge.jpg',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Custom 3D Print',
    price: 25.00,
    image: '/products/custom-3d-print.jpg',
    tag: 'Popular'
  }
]

const email = ref('')

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Subscribing:', email.value)
  email.value = ''
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            Connect & Share at Festivals with Style
          </h1>
          <p class="text-lg text-gray-600">
            Discover our unique collection of festival accessories that help you make lasting connections.
          </p>
          <Button size="lg" class="text-lg px-8">
            Shop Now
          </Button>
        </div>
        
        <div class="relative">
          <Carousel class="w-full max-w-lg mx-auto">
            <CarouselContent>
              <CarouselItem v-for="product in featuredProducts" :key="product.id">
                <div class="p-1">
                  <div class="overflow-hidden rounded-lg">
                    <img 
                      :src="product.image" 
                      :alt="product.name"
                      class="w-full h-[400px] object-cover"
                    >
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="product in featuredProducts" :key="product.id" 
               class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div class="relative">
              <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
              <span class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
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

    <!-- Promotional Banner -->
    <section class="bg-primary text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Special Offer!</h2>
        <p class="text-xl mb-6">
          Get 20% off on all Kandi bracelets! Plus, buy now and pay later with easy installments.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">20% OFF</h3>
            <p>All Kandi Bracelets</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">4 Payments</h3>
            <p>Interest-free with Klarna</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 class="font-bold text-2xl">Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-2xl text-center">
        <h2 class="text-3xl font-bold mb-4">Stay Connected</h2>
        <p class="text-gray-600 mb-8">
          Subscribe to our newsletter for exclusive offers, new products, and festival tips!
        </p>
        <div class="flex gap-4 max-w-md mx-auto">
          <Input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="flex-1"
          />
          <Button @click="subscribeNewsletter">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.carousel {
  @apply relative;
}

.carousel-content {
  @apply overflow-hidden;
}

.carousel-item {
  @apply flex-none;
}

.carousel-prev,
.carousel-next {
  @apply absolute top-1/2 transform -translate-y-1/2;
}

.carousel-prev {
  @apply left-4;
}

.carousel-next {
  @apply right-4;
}
</style>