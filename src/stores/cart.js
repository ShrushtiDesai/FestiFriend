import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity += product.quantity
      } else {
        this.cartItems.push(product)
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId)
    },
    updateQuantity(productId, quantity) {
      const item = this.cartItems.find(item => item.id === productId)
      if (item) {
        item.quantity = parseInt(quantity)
      }
    }
  },
  getters: {
    totalItems: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) => state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
    shippingEstimate: () => 5.00,
    taxEstimate: (state) => state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.084,
    orderTotal: (state) => {
      const subtotal = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
      const shipping = 5.00
      const tax = subtotal * 0.084
      return subtotal + shipping + tax
    }
  }
})