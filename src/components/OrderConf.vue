<template>
  <v-container class="pa-5">
    <v-card class="order-confirmation-card">
      <v-card-title class="headline">
        <span v-if="processing">Procesando la Transacción...</span>
        <span v-else>Compra Realizada con Éxito</span>
      </v-card-title>
      <v-card-text>
        <v-row justify="center" v-if="processing">
          <v-progress-circular indeterminate color="primary" size="70"></v-progress-circular>
        </v-row>
        <div v-else>
          <v-alert type="success" dismissible>
            <strong>¡Éxito!</strong> Tu compra ha sido realizada correctamente.
          </v-alert>
          <div class="order-details my-4">
            <p><strong>Nombre:</strong> {{ orderDetails.name }}</p>
            <p><strong>Correo Electrónico:</strong> {{ orderDetails.email }}</p>
            <p><strong>Dirección:</strong> {{ orderDetails.address }}</p>
            <p><strong>Ciudad:</strong> {{ orderDetails.city }}</p>
            <p><strong>Código Postal:</strong> {{ orderDetails.zip }}</p>
            <p><strong>País:</strong> {{ orderDetails.country }}</p>
          </div>
          <v-divider class="my-4"></v-divider>
          <div class="items-list">
            <h3>Detalles del Pedido</h3>
            <v-list dense>
              <v-list-item v-for="item in cartItems" :key="item.id" class="order-item">
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>Cantidad: {{ item.quantity }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content class="text-right">
                  <v-list-item-title>${{ (item.price * item.quantity).toLocaleString() }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div class="order-total">
              <strong>Total: ${{ totalPrice.toLocaleString() }}</strong>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/useCartStore';

const route = useRoute();
const cart = useCartStore();

const orderDetails = {
  name: route.query.name,
  email: route.query.email,
  address: route.query.address,
  city: route.query.city,
  zip: route.query.zip,
  country: route.query.country,
};

const processing = ref(true);
const cartItems = ref(cart.items);
const totalPrice = ref(cart.totalPrice);

onMounted(() => {
  setTimeout(() => {
    processing.value = false;
    setTimeout(() => {
      cart.clearCart(); // Limpia el carrito después de un pequeño delay adicional
    }, 1000); // Espera 1 segundo después de mostrar la información
  }, 4000); // Simula un delay de 3 segundos
});

console.log('Order Details:', orderDetails);
</script>

<style scoped>
.order-confirmation-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.order-details p {
  margin: 0.5rem 0;
}

.items-list h3 {
  margin-bottom: 1rem;
}

.order-item {
  margin-bottom: 1rem;
}

.order-total {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
}
</style>
