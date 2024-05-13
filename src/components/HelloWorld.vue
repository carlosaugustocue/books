<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Book Haven</h1>
      </div>

      <div class="py-4" />

      <!-- cards con la data de los libros -->
  <v-row>
    <v-col v-for="book in books" :key="book.id" cols="12" md="6" lg="4">
      <v-card class="mb-4" color="surface-variant" elevation="2" outlined>
        <v-img :src="book.cover" height="200" />
        <v-card-title>{{ book.title }}</v-card-title>
        <v-card-subtitle>{{ book.author }}</v-card-subtitle>
        <!-- <v-card-text>{{ book.description }}</v-card-text> -->
        <v-card-actions>
          <v-btn color="primary" @click="navigateToPage(book.id)">
            Ver detalle
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

    </v-responsive>
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
