<template>
  <v-container class="fill-height d-flex flex-column align-center justify-center">
    <v-img class="mb-4" height="" src="@/assets/logo.png" />

    <div class="text-center mb-4">
      <div class="text-body-2 font-weight-light mb-n1">Bienvenidos al</div>
      <h1 class="text-h2 font-weight-bold">Mundo de la lectura</h1>
    </div>
    <v-carousel>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

    <!-- cards con la data de los libros -->
    <div class="book-list-container">
      <!-- <h1 class="list-title">A List of Books</h1> -->
      <v-row>
        <v-col v-for="book in books" :key="book.id" cols="12" sm="6" md="4" lg="3">
          <v-card class="mb-4 book-card" elevation="2">
            <v-img :src="book.imagenes.full" height="300" class="cover mt-4" />
            <v-card-title class="title">{{ book.title }}</v-card-title>
            <v-card-text class="author">{{ book.autores[0].name }}</v-card-text>
            <v-card-text class="genre">Tipo:

              <v-chip
      class="ma-2"
      color="pink"
      label
    >
      <v-icon icon="mdi-label" start></v-icon>
      {{ book.type.valor}}
    </v-chip>
            </v-card-text>
            <v-card-text class="price">${{ book.price.toLocaleString() }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="navigateToPage(book.id)">
                Ver detalle
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- End cards con la data de los libros -->
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import books from '@/data/books.js'

const router = useRouter()
// console.log(books)

const navigateToPage = (id) => {
  router.push(`/detail/${id}`)
}

//Traer datos desde ./data/books.js

</script>

<style scoped>
.fill-height {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* Asegurar que el contenedor llene toda la altura de la pantalla */
}

.book-list-container {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra sutil */
  transition: transform 0.2s;
  padding: 20px;
  background-color: #f9f9f9;
  /* Fondo claro */
}

.book-card:hover {
  transform: translateY(-5px);
  /* Efecto hover */
}

.cover {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;

}

.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* Número de líneas */
  -webkit-box-orient: vertical;
  white-space: normal;
}

.author {
  font-size: 1.5em;
  font-weight: 600;
  color: #080f20;
  margin-top: 5px;
  text-align: center;
  margin: 1px 0;
}



.genre,
.price {
  text-align: center;
  margin: 1px 0;
}

.price {
  font-size: 24px;
  color: #000;
  font-weight: bold;
}

.v-btn {
  margin-bottom: 10px;
}
</style>
