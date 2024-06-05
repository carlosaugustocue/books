<template>
  <v-container class="fill-height d-flex flex-column align-center">
    <v-img class="mb-4" height="" src="@/assets/logo.png" />

    <v-carousel class="mb-4" height="300" show-arrows>
      <v-carousel-item
        v-for="(image, index) in carouselImages"
        :key="index"
        :src="image"
        cover
      ></v-carousel-item>
    </v-carousel>

    <div class="book-list-container">
      <v-row>
        <v-col
          v-for="book in filteredBooks"
          :key="book.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="mb-4 book-card" elevation="2">
            <v-img :src="book.imagenes.full" height="300" class="cover mt-4" />
            <v-card-title class="title">{{ book.name }}</v-card-title>
            <v-card-subtitle class="author">{{ book.autores[0].name }}</v-card-subtitle>
            <v-card-text class="genre">
              Tipo:
              <v-chip class="ma-2" color="pink" label>
                <v-icon icon="mdi-label" start></v-icon>
                {{ book.type.valor }}
              </v-chip>
            </v-card-text>
            <v-card-text class="price">${{ book.price.toLocaleString() }}</v-card-text>
            <v-card-actions>
              <v-btn prepend-icon="$complete"  class="text-none mb-4" variant="flat" size="large" color="indigo-darken-3" @click="navigateToPage(book.id)">
                Ver detalle
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-if="filteredBooks.length === 0" cols="12" class="text-center">
          <v-alert type="info" class="mx-auto">
            No se encontraron libros que coincidan con la búsqueda.
          </v-alert>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import books from '@/data/books.js';

const router = useRouter();
const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
});

const carouselImages = [
  'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
  'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
  'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
];

const navigateToPage = (id) => {
  router.push(`/detail/${id}`);
};

const filteredBooks = computed(() => {
  const query = props.searchQuery ? props.searchQuery.toLowerCase() : '';
  return books.filter(
    (book) =>
      book.name.toLowerCase().includes(query) ||
      book.autores[0].name.toLowerCase().includes(query)
  );
});
</script>

<style scoped>
.fill-height {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
}

.search-bar {
  width: 100%;
  max-width: 600px;
}

.book-list-container {
  text-align: center;
  width: 100%;
  padding: 20px;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  padding: 20px;
  background-color: #f9f9f9;
}

.book-card:hover {
  transform: translateY(-5px);
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
  -webkit-box-orient: vertical;
  white-space: normal;
}

.author {
  font-size: 1.2em;
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
  font-size: 1.5em;
  color: #000;
  font-weight: bold;
}

.v-btn {
  margin-bottom: 10px;
}
</style>
