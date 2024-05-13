<!-- BookDetail.vue -->
<template>
  <div>
    <ToolBar />

    <h1>Detalle de la página con ID: {{ $route.params.id }}</h1>
    <!-- <BookData /> -->
    <v-card class="mx-auto" max-width="800" v-if="book">
      <v-img :src="book.cover" height="400" />
      <v-card-title>{{ book.title }}</v-card-title>
      <v-card-subtitle>{{ book.author }}</v-card-subtitle>
      <v-card-text>{{ book.description }}</v-card-text>
    </v-card>
    <div v-else>
      <p>No se encontró información del libro solicitado.</p>
    </div>
    <v-btn @click="addToCart(book)" color="primary"> Añadir al carrito </v-btn>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCartStore } from '@/store/useCartStore.js'
// import { computed } from 'vue';

import { ref } from 'vue';

const cart = useCartStore()
import books from "@/data/books.js";



//getters
//  const lastOperation = computed(() => counterStore.lastOperation);

//actions


const route = useRoute();

const book = ref(books.find((book) => String(book.id) === route.params.id));

function addToCart() {
  if (book.value) {
    cart.addToCart(book.value);
  } else {
    console.error('Intento de añadir un libro no encontrado al carrito.');
  }
}

</script>
