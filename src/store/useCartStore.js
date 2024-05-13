//useCartStore.js
//Path: src/store/useCartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore({

  id: 'cart',
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  actions: {
    addToCart(book) {
      // console.log('***********************',book);
      const existingItem = this.items.find(item => item.id === book.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...book, quantity: 1 });
      }
      console.log(this.items);
    },
    removeFromCart(bookId) {
      const index = this.items.findIndex(item => item.id === bookId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    incrementItemQuantity(bookId) {
      const existingItem = this.items.find(item => item.id === bookId);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrementItemQuantity(bookId) {
      const existingItem = this.items.find(item => item.id === bookId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          this.removeFromCart(bookId);
        }
      }
    },
    clearCart() {
      this.items = [];
    }
  }
})

