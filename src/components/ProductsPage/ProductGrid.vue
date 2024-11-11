`<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import type { Product } from '@/components/ProductsPage/product';

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>`