<script setup>
  import { useCartStore } from '@/stores/cart';

  const cartStore = useCartStore();

  const incrementQuantity = (item) => {
    cartStore.updateQuantity(item.id, item.quantity + 1)
  }

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      cartStore.updateQuantity(item.id, item.quantity - 1)
    }
  }
</script>

<template>
  <div class=" bg-[#f6fff8] py-8">
    <div class="container mx-auto px-4">
      <div v-if="cartStore.cartItems.length === 0" class="text-center py-12">
        <p class="text-gray-700 text-5xl">Your cart is empty!</p>
        <div class="top-0 text-center mt-8">
        <router-link to="/shop"><button class=" text-2xl my-6 bg-[#4f772d] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#90a955] transition duration-200 transform hover:scale-[1.01]">Go to Shop! ></button></router-link>
        </div>
        
      
      </div>
      <div  v-else >
        <h1 class="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Cart Items -->
        <div class="lg:w-2/3">
          <div class="bg-white rounded-2xl shadow-lg animate-fade-in ">
            <div class="p-6 space-y-6">
              <div v-for="item in cartStore.cartItems" :key="item.id" class="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                <div class="sm:w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                </div>
                
                <div class="flex-1">
                  <div class="flex justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
                      <p class="mt-1 text-sm font-bold text-gray-900">${{ item.price.toFixed(2) }}</p>
                    </div>
                    
                    <div class="flex items-start gap-4">
                      <div class="mt-4">
                        <div class="inline-flex items-center border border-gray-300 rounded">
                          <button
                            @click="decrementQuantity(item)"
                            class="px-3 py-1 text-gray-600 bg-gray-200 hover:bg-gray-100 text-lg font-medium"
                            :disabled="item.quantity <= 1">-
                          </button>
                          <div class="px-4 py-1 text-gray-900 min-w-[3rem] text-center">
                            {{ item.quantity }}
                          </div>
                          <button
                            @click="incrementQuantity(item)"
                            class="px-3 py-1 text-gray-600 bg-gray-200 hover:bg-gray-100 text-lg font-medium">+
                          </button>
                       </div>
                     </div>
                      <button
                        @click="cartStore.removeFromCart(item.id)"
                        class="text-2xl text-gray-400 hover:text-gray-500">×
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
          <div class="bg-white rounded-lg shadow-xl p-8 animate-fade-in">
            <h2 class="text-lg font-bold text-gray-900 mb-4">Order summary</h2>
            
            <div class="space-y-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium">${{ cartStore.subtotal.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Shipping estimate</span>
                <span class="font-medium">${{ cartStore.shippingEstimate.toFixed(2) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Tax estimate</span>
                <span class="font-medium">${{ cartStore.taxEstimate.toFixed(2) }}</span>
              </div>
              
              <div class="pt-4 border-t border-gray-200">
                <div class="flex justify-between">
                  <span class="text-base font-bold text-gray-900">Order total</span>
                  <span class="text-base font-bold text-gray-900">${{ cartStore.orderTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
            <button class="mt-6 w-full bg-[#90a955] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#4f772d] transition duration-200 transform hover:scale-[1.01]">
              Checkout
            </button>
          </div>
        </div>
      </div>
      </div>
      <div v-if="cartStore.cartItems.length > 0" class="top-0 text-center mt-8">
        <router-link to="/shop" class="text-lg text-[#023e8a] hover:text-[#457b9d] font-medium">Continue Shopping ></router-link>
      </div>
    </div>
  </div>
</template>

<!-- <script>
  export default {
    setup() {
      const cartStore = useCartStore();
      return {
        cartItems: cartStore.cartItems
      };
    }
  }
</script> -->