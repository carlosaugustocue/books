<template>
  <div>
    <ToolBar />
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-img  :src="book.imagenes.full" class="book-cover"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="book-details">
            <v-card-title class="title">{{ book.name }}</v-card-title>
            <v-card-subtitle class="author">{{ book.autores[0].name }}</v-card-subtitle>
            <v-card-actions>
              <v-btn @click="addToCart" class="text-none mb-4" variant="flat" size="large" color="indigo-darken-3">
                AÑADIR AL CARRITO
              </v-btn>

            </v-card-actions>
            <v-card-text class="price">${{ book.price.toLocaleString() }}</v-card-text>
            <v-divider></v-divider>
            <v-row class="book-info">
              <v-col cols="12" sm="6" md="4">
                <div><strong>Editorial:</strong> {{ book.marca_producto }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div><strong>Autores:</strong> {{ book.autores[0].name }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div><strong>Formato:</strong> {{ book.lib_formato.valor }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div><strong>Presentación:</strong> {{ book.lib_presentacion.valor_labels[0] }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div><strong>ISBN:</strong> {{ book.lib_eb_isbn }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <div><strong>Categoría:</strong> {{ book.categoria_producto }}</div>
              </v-col>
            </v-row>

            <v-divider></v-divider>
            <v-card-text class="description" v-html="book.descripcion"></v-card-text>
            <v-divider></v-divider>

            <!-- Paneles de expansión para Especificaciones y Políticas de envío -->
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title><strong>Especificaciones</strong></v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <ul>
                        <li><strong>Edición:</strong> 1</li>
                        <li><strong>Idioma:</strong> Español</li>
                        <li><strong>Número de páginas:</strong> 382</li>
                        <li><strong>Número de capítulos:</strong> No especificado</li>
                      </ul>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <ul>
                        <li><strong>Dimensiones:</strong> Ancho: 16cm - Alto: 24cm</li>
                        <li><strong>Peso:</strong> 50gr</li>
                      </ul>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title> <strong>Políticas de envío</strong> </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p>Detalles de envío:</p>
                  <p>Si la dirección de envío es Bogotá, Cali, Medellín (no aplica para municipios del área metropolitana), Barranquilla, Cartagena o Pereira, se hará un cobro de $4.000 COP por despachos de 1 o 2 libros y $500 COP por cada libro adicional. Para las demás ciudades, municipios y poblaciones la tarifa de envío corresponde a la tarifa de la transportadora Coordinadora Mercantil.</p>
                  <p>*Los tiempos de despacho pueden presentar retrasos debido a temas de orden público que se presentan en algunas ciudades del país y a la emergencia sanitaria.</p>
                  <p>Tiempo aproximado de entrega:</p>
                  <ul>
                    <li>Ciudades principales: 3 días hábiles.</li>
                    <li>Ciudades intermedias: 5 días hábiles (ciudades y poblaciones que requieren reexpedición: 8 días hábiles)</li>
                    <li>Envíos internacionales: 8 días hábiles.</li>
                  </ul>
                  <p>Los días hábiles son de lunes a viernes. Tener en cuenta que las compras realizadas después de las 3:00 p.m. se despachan el día hábil siguiente.</p>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" :bottom="true" color="success" timeout="2000">
        {{ snackbarText }}
        <template #action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCartStore } from '@/store/useCartStore.js'
import { ref } from 'vue';
import books from "@/data/books.js";

const route = useRoute();
const cart = useCartStore();
const book = ref(books.find((book) => String(book.id) === route.params.id));

const snackbar = ref(false); // Controla la visibilidad del snackbar
const snackbarText = ref(""); // Texto del snackbar

function addToCart() {
  if (book.value) {
    cart.addToCart(book.value);
    snackbarText.value = `${book.value.name} añadido al carrito`;
    snackbar.value = true;
  } else {
    console.error('Intento de añadir un libro no encontrado al carrito.');
  }
}
</script>

<style scoped>



.book-cover {
  width: 100%;
  height: auto;
  margin-top: 2.3rem;
  border: 10px solid transparent;
  border-image: linear-gradient(45deg, #f3ec78, #af4261) 1;
}

.book-details {
  padding: 20px;
}

.title {
  font-size: 2em;
  font-weight: 800;
  color: #121a2f;
}

.author {
  font-size: 2em;
  color: #121a2f;
  margin-bottom: 20px;
}

.price {
  font-size: 2.5em;
  font-weight: 500;
  color: #121a2f;
  margin-bottom: 20px;
}

.book-info {
  margin-bottom: 5px;
  margin-top: 3px;
}

.book-info div {
  margin-bottom: 5px;
}

.description {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
}

.v-btn {
  margin-bottom: 10px;
}
</style>
