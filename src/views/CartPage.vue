<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart';

const subtotal = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const shippingEstimate = 5.00
const taxEstimate = computed(() => subtotal.value * 0.084)
const orderTotal = computed(() => subtotal.value + shippingEstimate + taxEstimate.value)

const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== itemId)
}

const updateQuantity = (itemId, newQuantity) => {
  const item = cartItems.value.find(item => item.id === itemId)
  if (item) {
    item.quantity = parseInt(newQuantity)
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Cart Items -->
        <div class="lg:w-2/3">
          <div class="bg-white rounded-lg shadow">
            <div class="p-6 space-y-6">
              <div v-for="item in cartItems" :key="item.id" class="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                <div class="sm:w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                </div>
                
                <div class="flex-1">
                  <div class="flex justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
                      <!-- <p class="mt-1 text-sm text-gray-500">{{ item.color }}{{ item.size ? ` / ${item.size}` : '' }}</p> -->
                      <p class="mt-1 text-sm font-medium text-gray-900">${{ item.price.toFixed(2) }}</p>
                      
                      <!-- <div class="mt-2">
                        <span v-if="item.inStock" class="text-sm text-green-600 flex items-center">
                          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          In stock
                        </span>
                        <span v-else class="text-sm text-gray-500">
                          Ships in {{ item.shipsIn }}
                        </span>
                      </div> -->
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <select
                        :value="item.quantity"
                        @change="updateQuantity(item.id, $event.target.value)"
                        class="rounded-md border border-gray-300 text-base"
                      >
                        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                      </select>
                      
                      <button
                        @click="removeItem(item.id)"
                        class="text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Remove</span>
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:w-1/3">
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Order summary</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping estimate</span>
                <span class="font-medium">${{ shippingEstimate.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Tax estimate</span>
                <span class="font-medium">${{ taxEstimate.toFixed(2) }}</span>
              </div>
              
              <div class="pt-4 border-t border-gray-200">
                <div class="flex justify-between">
                  <span class="text-base font-medium text-gray-900">Order total</span>
                  <span class="text-base font-medium text-gray-900">${{ orderTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
            
            <button class="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      const cartStore = useCartStore();
      return {
        cartItems: cartStore.cartItems
      };
    }
  }
</script>