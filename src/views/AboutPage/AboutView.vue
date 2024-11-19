<script setup>
import { ref, onMounted } from 'vue'
// import BackgroundPattern from './BackgroundPattern.vue';
import ProductCard from './ProductCard.vue';

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})

const features = ref([
  {
    title: 'Connect Anywhere',
    description: 'Exchange contacts seamlessly at festivals, even in dead zones',
    icon: '🌐',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Track Memories',
    description: 'Never forget where you met your festival friends',
    icon: '🎯',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Offline Messaging',
    description: 'Stay in touch using our revolutionary mesh network',
    icon: '💫',
    color: 'from-blue-500 to-cyan-500'
  }
])

const products = ref([
  {
    title: 'NFC-Enabled Wristbands',
    description: 'Exchange contact information effortlessly with a simple tap',
    icon: '⌚',
    features: [
      'Instant profile sharing with a tap',
      'Works without mobile connectivity',
      'Location tracking for memorable meetups',
      'Seamless app integration'
    ]
  },
  {
    title: 'FestiFriend Communicator',
    description: 'Stay connected with friends through mesh networking technology',
    icon: '📡',
    features: [
      'Bluetooth connectivity with your phone',
      'Message friends without cellular service',
      'Powered by Meshtastic technology',
      'Network strengthens with more users'
    ]
  }
])
</script>

<template>
  <div class="min-h-screen bg-[#fefef4]">
    <!-- Hero Section -->
    <section class="relative py-24 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-blue-600/80 to-pink-600/90"></div>
      
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto" 
           :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-10': !isVisible }"
           style="transition: all 1s ease-out">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Bringing You Closer, 
          <span class="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
            Even When Signal Fades
          </span>
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience festivals like never before with our revolutionary connection technology
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 px-4 bg-white/50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-5xl font-bold text-center mb-12">Our Story</h2>
        <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12">
          <p class="text-xl text-gray-700 leading-relaxed mb-6">
            FestiFriend was born in the heart of the festival scene. It all started when our founders, fellow festival enthusiasts, found themselves in a familiar situation – separated from friends in a sea of people, unable to reconnect due to nonexistent cell service. Surrounded by thousands, they felt isolated, missing out on unforgettable moments and new connections simply because they couldn’t stay in touch. There had to be a better way.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            That’s when the spark for FestiFriend came to life. Our founders envisioned a world where festivals would be about bringing people closer, not losing track of them. A world where you could meet new friends, share your details with a tap, and feel connected no matter how far the music took you.
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 class="text-5xl font-bold mb-8 text-center">About FestiFriend</h2>
          <div class="space-y-12 text-gray-700">
            <p class="text-xl">
              Welcome to FestiFriend! We're here to transform your festival experience by making it easier to connect, 
              communicate, and create memories with the people around you. As a company dedicated to enhancing social 
              connections at festivals and events, we bring innovative technology to help you stay connected, even in 
              the busiest and most remote festival locations.
            </p>
            <div class="border-l-4 border-purple-500 pl-6 my-8">
              <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
              <p class="text-xl">
                At FestiFriend, we believe that festivals are about more than just music and entertainment – they're 
                about the people you meet and the connections you make. Our products are designed to foster meaningful 
                connections, enabling you to share, remember, and relive your festival journey long after the music stops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Features -->
    <section class="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Product Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" 
               class="group relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 :class="[feature.color]"></div>
            <div class="relative z-10 group-hover:text-white transition-colors duration-300">
              <span class="text-5xl mb-6 block">{{ feature.icon }}</span>
              <h3 class="text-2xl font-bold mb-4">{{ feature.title }}</h3>
              <p class="text-lg opacity-90">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Products Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Our Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard v-for="product in products" 
                      :key="product.title"
                      v-bind="product" class="text-xl" />
        </div>
      </div>
    </section>

    <!-- From Us to You Section -->
    <section class="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          From Us to You
        </h2>
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <p class="text-xl text-gray-700 leading-relaxed">
            FestiFriend is more than just technology – it's about creating the space to meet, share, and remember. 
            Today, our FestiFriend family stretches across festivals worldwide, each device a small step toward 
            a bigger festival family. So, the next time you're out there, just know: there's always a FestiFriend 
            nearby, ready to make every festival a little brighter, a little closer, and a lot more memorable.
          </p>
        </div>
      </div>
    </section>

    <!-- App Download Section -->
    <section class="py-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
      <div class="max-w-5xl mx-auto text-center text-white relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Festival Experience?</h2>
        <p class="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
          Download FestiFriend now and never miss another connection.<br> Available on iOS only.
        </p>
        
        <div class="flex flex-wrap justify-center gap-6">
          <a href="#" 
             class="group flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
            <!-- <span class="text-2xl transition-transform group-hover:-translate-y-0.5">📱</span> -->
            <span class="transition-transform group-hover:-translate-y-0.5">Download on App Store</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>