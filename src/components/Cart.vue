<template>
  <div>
    <ToolBar />
    <v-container>
      <h2 class="mb-4">Tu Carrito de compras</h2>
      <v-row v-for="item in cartItems" :key="item.id" class="mb-3">
        <v-col cols="12">
          <v-card class="cart-item-card">
            <v-row no-gutters>
              <v-col cols="12" md="3">
                <v-img :src="item.imagenes.full" class="cart-item-image"></v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-card-title class="text-h6">{{ item.name }}</v-card-title>
                <v-card-subtitle class="text-body-1">Autor: {{ item.autores[0].name }}</v-card-subtitle>
                <v-card-subtitle class="text-body-1">ISBN: {{ item.lib_eb_isbn }}</v-card-subtitle>
                <v-card-subtitle class="text-body-1">Tipo:
                  <v-chip
      :model-value="true"
      class="ma-2"
      color="teal"
      prepend-icon="mdi-checkbox-marked-circle"

    >
    {{ item.lib_formato.valor_labels[0] }}
    </v-chip></v-card-subtitle>
              </v-col>
              <v-col cols="12" md="3" class="d-flex flex-column justify-space-between align-end">
                <div class="d-flex align-center">
                  <v-btn icon @click="decrement(item.id)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <span class="mx-2">{{ item.quantity }}</span>
                  <v-btn icon @click="increment(item.id)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <div class="text-h6">${{ item.price.toLocaleString() }}</div>
                <v-btn icon color="red" @click="removeFromCart(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row class="pt-4 summary-section">
        <v-col cols="12" class="text-center">
          <div class="summary-box">
            <v-row>
              <v-col cols="4" class="summary-item">
                <div class="summary-label">Total de libros</div>
                <div class="summary-value">{{ cart.itemCount }}</div>
              </v-col>
              <v-col cols="4" class="summary-item">
                <div class="summary-label">Precio total</div>
                <div class="summary-value">${{ cart.totalPrice.toLocaleString() }}</div>
              </v-col>
              <v-col cols="4" class="summary-item">
                <div class="summary-label">Comprar</div>
                <v-btn color="primary" class="summary-button">Proceder al pago</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/useCartStore';

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
.v-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3f51b5;
}

.cart-item-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cart-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  border-radius: 8px;
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color:#121a2f;
}

.text-body-1 {
  font-size: 1rem;
  color: #757575;
  margin-bottom: 0.5rem;
}

.text-body-2 {
  font-size: 0.875rem;
  color: #9e9e9e;
  margin-bottom: 0.5rem;
}

.summary-section {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
}

.summary-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.summary-label {
  font-size: 1rem;
  color: #757575;
  margin-bottom: 0.5rem;
}

.summary-value {
  font-size: 2rem;
  font-weight: bold;
  color: #3f51b5;
}

.summary-button {
  margin-top: 0.5rem;
}
</style>
