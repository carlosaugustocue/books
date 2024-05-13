<template>
  <v-container>
    <ToolBar />
    <h2>Tu Carrito</h2>
    <v-list dense>
      <v-list-item
        v-for="item in cartItems"
        :key="item.id"
        class="d-flex justify-space-between align-center"
      >
        <div class="flex-grow-1">
          <div class="text-h6">{{ item.title }} - {{ item.quantity }} x ${{ item.price.toFixed(2) }}</div>
          <div class="text-subtitle-1">{{ item.description }}</div>
        </div>
        <div>
          <v-btn icon @click="decrement(item.id)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn icon @click="increment(item.id)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn icon color="red" @click="removeFromCart(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-list-item>
    </v-list>
    <div>Total Items: {{ cart.itemCount }}</div>
    <div>Total Price: ${{ cart.totalPrice.toFixed(2) }}</div>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/store/useCartStore';

const cart = useCartStore();
const cartItems = cart.items;
// const itemCount = cart.itemCount;
// const totalPrice = cart.totalPrice;

function removeFromCart(id) {
  cart.removeFromCart(id);
}

function increment(id) {
  cart.incrementItemQuantity(id);
}

function decrement(id) {
  cart.decrementItemQuantity(id);
}
</script>

<style scoped>
.v-list-item {
  border-bottom: 1px solid #eee;  /* Optional: for better visual separation of items */
}
</style>
