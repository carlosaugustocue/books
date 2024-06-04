<template>
  <div>
    <ToolBar />
    <v-container>
      <h2 class="mb-4">Proceso de Compra</h2>
      <v-row>
        <v-col cols="12" md="8">
          <v-card class="mb-4">
            <v-card-title>Información del Usuario</v-card-title>
            <v-card-text>
              <v-form ref="userForm" v-model="valid" lazy-validation>
                <v-text-field v-model="user.name" :rules="[rules.required]" label="Nombre Completo" required></v-text-field>
                <v-text-field v-model="user.email" :rules="[rules.required, rules.email]" label="Correo Electrónico" required></v-text-field>
                <v-text-field v-model="user.phone" :rules="[rules.required]" label="Teléfono" required></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-title>Detalles de Envío</v-card-title>
            <v-card-text>
              <v-form ref="shippingForm" v-model="valid" lazy-validation>
                <v-text-field v-model="shipping.address" :rules="[rules.required]" label="Dirección" required></v-text-field>
                <v-text-field v-model="shipping.city" :rules="[rules.required]" label="Ciudad" required></v-text-field>
                <v-text-field v-model="shipping.zip" :rules="[rules.required]" label="Código Postal" required></v-text-field>
                <v-text-field v-model="shipping.country" :rules="[rules.required]" label="País" required></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card class="mb-4">
            <v-card-title>Método de Pago</v-card-title>
            <v-card-text>
              <v-form ref="paymentForm" v-model="valid" lazy-validation>
                <v-text-field v-model="payment.cardNumber" :rules="[rules.required]" label="Número de Tarjeta" required></v-text-field>
                <v-text-field v-model="payment.expiry" :rules="[rules.required]" label="Fecha de Expiración (MM/YY)" required></v-text-field>
                <v-text-field v-model="payment.cvv" :rules="[rules.required]" label="CVV" required></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="summary-card">
            <v-card-title>Resumen del Pedido</v-card-title>
            <v-card-text>
              <v-list-item v-for="item in cartItems" :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-title>{{ item.autores[0].name }}</v-list-item-title>
                  <v-list-item-subtitle>Cantidad: {{ item.quantity }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content class="text-end">
                  ${{ (item.price * item.quantity).toLocaleString() }}
                </v-list-item-content>
                <v-divider></v-divider>
              </v-list-item>
              <v-divider class="my-2"></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content class="text-end">
                  ${{ cart.totalPrice.toLocaleString() }}
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="!valid" color="primary" class="summary-button" @click="placeOrder">Realizar Pedido</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/useCartStore';
import { useRouter } from 'vue-router';

const cart = useCartStore();
const cartItems = cart.items;
const router = useRouter();

const user = ref({
  name: '',
  email: '',
  phone: '',
});

const shipping = ref({
  address: '',
  city: '',
  zip: '',
  country: '',
});

const payment = ref({
  cardNumber: '',
  expiry: '',
  cvv: '',
});

const valid = ref(false);

const rules = {
  required: value => !!value || 'Campo requerido.',
  email: value => /.+@.+\..+/.test(value) || 'Correo electrónico no válido.',
};

function placeOrder() {
  if (valid.value) {
    router.push({ name: 'Order', query: { name: user.value.name, email: user.value.email, address: shipping.value.address, city: shipping.value.city, zip: shipping.value.zip, country: shipping.value.country } });
  }
}
</script>

<style scoped>
.v-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3f51b5;
}

.summary-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.summary-button {
  width: 100%;
}

.v-list-item {
  padding: 0.5rem 0;
}

.v-list-item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-card-title, .v-card-text {
  padding-bottom: 0;
}

.v-card-actions {
  justify-content: center;
}
</style>
