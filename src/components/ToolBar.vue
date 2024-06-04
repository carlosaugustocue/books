<template>
  <v-app-bar app class="styled-toolbar">
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <v-img
            src="@/assets/books_haven.ico"
            alt="Books Haven Logo"
            width="40"
            height="40"
            class="mr-3"
          ></v-img>
        </v-col>
        <v-col>
          <router-link to="/" class="styled-title">
            <v-toolbar-title>Book Haven</v-toolbar-title>
          </router-link>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="$router.push('/cart')">
            <v-badge color="red" :content="cart.itemCount">
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from '@/store/useCartStore.js';
import { ref, watch } from 'vue';

const cart = useCartStore();
const props = defineProps(['searchQuery']);
const emit = defineEmits(['update:searchQuery']);
const localSearchQuery = ref(props.searchQuery);

watch(() => props.searchQuery, (newVal) => {
  localSearchQuery.value = newVal;
});

const updateSearchQuery = (value) => {
  emit('update:searchQuery', value);
};
</script>

<style scoped>
.styled-toolbar {
  background: linear-gradient(45deg, #3f51b5, #5c6bc0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.styled-title {
  text-decoration: none;
  color: inherit;
}

.v-toolbar-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem; /* Tamaño de fuente más grande */
  font-weight: bold;
  color: #121a2f; /* Cambiado a blanco para mayor contraste */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.v-btn {
  margin-left: 8px;
}

.v-icon {
  color: #121a2f; /* Cambiado a blanco para mayor contraste */
}
</style>
