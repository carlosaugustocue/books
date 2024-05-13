<!-- BookDetail.vue -->
<template>
  <div>
    <ToolBar />
    <v-container>
      <h1>Detalle de la página con ID: {{ $route.params.id }}</h1>

    <v-row>
      <v-col >
        <v-skeleton-loader type="card">

          <v-img
              :src="book.cover"
              style="
              width: 0.5em;
              border: 30px solid transparent;
              border-image: linear-gradient(45deg, #f3ec78, #af4261) 1;
              "
            ></v-img>
        </v-skeleton-loader>

      </v-col>
      <v-col>
        <v-card>
          <v-card-title class="text-uppercase" style="
            font-size: 2em;
            font-weight: 800;
            color: #121a2f;

          ">{{ book.title }}</v-card-title>
           <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon icon="mdi-account-circle-outline" start></v-icon>
      <v-card-subtitle>{{ book.author }}</v-card-subtitle>
    </v-chip>

          <v-card-text style="
            font-size: 1.5em;
            font-weight: 500;
            color: #121a2f;
          ">${{ book.price }}</v-card-text>
          <v-card-actions>

            <v-btn @click="addToCart"
        class="text-none ms-4 text-white"
        color="blue-darken-4"
        rounded="0"
        variant="flat"
      >
      Añadir al carrito
      </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-text>{{ book.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </v-container>


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
