// // store/cart.js
// import { defineStore } from 'pinia';
// import { ref } from 'vue';

// export const useCartStore = defineStore('cart', () => {
//   const cartItems = ref([
//     {
//       id: 1,
//       name: 'Basic Tee',
//       price: 32.00,
//       quantity: 1,
//       image: '/tee-sienna.jpg',
//     }
//   ]);

//   const addToCart = (product) => {
//     const existingProduct = cartItems.value.find(item => item.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       cartItems.value.push({ ...product, quantity: 1 });
//     }
//   };

//   return { cartItems, addToCart };
// });

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([
    {
      id: 1,
      name: 'Basic Tee',
      price: 32.00,
      quantity: 1,
      image: '/tee-sienna.jpg',
    }
  ]);

  const addToCart = (product) => {
    const existingProduct = cartItems.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Add selected quantity to the existing product
    } else {
      cartItems.value.push({ ...product, quantity: product.quantity });
    }
  };

  return { cartItems, addToCart };
});

