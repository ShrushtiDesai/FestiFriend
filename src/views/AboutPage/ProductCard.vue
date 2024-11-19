<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
  features: Array
})
</script>

<template>
  <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2">
    <div class="text-4xl mb-6">{{ icon }}</div>
    <h3 class="text-2xl font-bold mb-4 text-purple-600">{{ title }}</h3>
    <p class="text-gray-700 mb-6">{{ description }}</p>
    <ul class="space-y-3">
      <li v-for="feature in features" :key="feature" class="flex items-start">
        <span class="text-purple-500 mr-2">✦</span>
        <span class="text-gray-600">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>