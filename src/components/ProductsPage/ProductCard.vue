`<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next';
import type { Product } from '@/components/Products Page/product';
import { RouterLink } from 'vue-router';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg border">
    <RouterLink :to="'/product/' + product.id">
      <div class="p-0">
        <div class="aspect-square overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div class="p-4">
        <div class="text-sm text-gray-500 mb-1">{{ product.brand }}</div>
        <h2 class="font-semibold text-gray-900 mb-2">{{ product.name }}</h2>
        <div class="text-lg font-bold text-gray-900">${{ product.price }}</div>
      </div>
    </RouterLink>
    <div class="p-4 pt-0">
      <button class="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90">
        <ShoppingCart class="h-4 w-4" />
        Add to Cart
      </button>
    </div>
  </div>
</template>