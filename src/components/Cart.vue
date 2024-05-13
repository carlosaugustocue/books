<template>
  <ToolBar />
  <v-container>
    <h2>Tu Carrito</h2>
    <div v-for="item in cartItems" :key="item.id">
      <v-card class="mb-3">
        <v-row>
          <v-col cols="3">
            <v-card>

              <v-img :src="item.cover" ></v-img>
            </v-card>
          </v-col>
          <v-col cols="6">
            <div class="text-h6">{{ item.title }}</div>
            <div>{{ item.description }}</div>
            <div>{{ item.style }}</div>
          </v-col>
          <v-col cols="3" class="d-flex flex-column justify-space-between">
            <div class="d-flex justify-end">
              <v-btn icon @click="decrement(item.id)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              {{ item.quantity }}
              <v-btn icon @click="increment(item.id)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
            <div class="text-h6 d-flex justify-end">${{ item.price }} </div>
            <v-btn icon color="red" @click="removeFromCart(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <v-row ma-0 p>
      <v-col ma-0>
        <span style="
          color: blue;
        ">

          Total de libros: {{ cart.itemCount }}
        </span>
      </v-col>
    </v-row>
    <v-row mb-0>
      <v-col mb-0>
        Precio total: ${{ cart.totalPrice.toFixed(2) }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/store/useCartStore';
// import { ref } from 'vue';

const cart = useCartStore();
const cartItems = cart.items;

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
.v-card {
  border: 1px solid #eee;
}
</style>
