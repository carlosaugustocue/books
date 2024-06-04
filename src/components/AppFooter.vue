<template>
  <v-footer height="40" app class="styled-footer">
    <v-container>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="auto">
          <a
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            :title="item.title"
            class="d-inline-block mx-2 social-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <v-icon
              :icon="item.icon"
              size="20"
            />
          </a>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col cols="auto" class="text-center">
          <div class="text-caption">
            &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Books Haven</span>
            —
            <a
              class="text-decoration-none on-surface"
              href="https://vuetifyjs.com/about/licensing/"
              rel="noopener noreferrer"
              target="_blank"
            >
              CUE AVH License
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const items = [
  // Tu lista de ítems aquí
];
</script>

<style scoped>
.styled-footer {
  background-color: #ECF0F1;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 40px;
  padding: 0 13px;
  position: fixed; /* Changed to fixed */
  bottom: 0; /* Stick to the bottom */
  width: 100%; /* Full width */
  z-index: 1000; /* Ensure it's on top */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
}

.social-link :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  transition: color 0.3s ease-in-out;
  text-decoration: none;
}

.social-link:hover :deep(.v-icon) {
  color: rgba(25, 118, 210, 1);
}

.text-caption {
  color: rgba(9, 8, 8, 0.797);
}

.on-surface {
  color: rgba(255, 255, 255, 0.9);
}

.on-surface:hover {
  color: #1976d2;
}
</style>
