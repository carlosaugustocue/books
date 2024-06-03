<template lang="">
  <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link to="/"
        style="text-decoration: none; color: inherit">
        <v-toolbar-title>Home</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push('/cart')">
        <v-badge color="red" :content="cart.itemCount">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
</template>
<script setup>

import { useCartStore } from '@/store/useCartStore.js'

const cart = useCartStore();

</script>
