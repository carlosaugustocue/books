<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant" href="https://vuetifyjs.com/"
          prepend-icon="mdi-text-box-outline" rel="noopener noreferrer" rounded="lg"
          subtitle="Learn about all things Vuetify in our documentation." target="_blank" title="Documentation"
          variant="text">
          <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant"
          href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides" prepend-icon="mdi-star-circle-outline"
          rel="noopener noreferrer" rounded="lg" subtitle="Explore available framework Features." target="_blank"
          title="Features" variant="text">
          <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant"
          href="https://vuetifyjs.com/components/all" prepend-icon="mdi-widgets-outline" rel="noopener noreferrer"
          rounded="lg" subtitle="Discover components in the API Explorer." target="_blank" title="Components"
          variant="text">
          <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card append-icon="mdi-open-in-new" class="py-4" color="surface-variant"
          href="https://discord.vuetifyjs.com" prepend-icon="mdi-account-group-outline" rel="noopener noreferrer"
          rounded="lg" subtitle="Connect with Vuetify developers." target="_blank" title="Community" variant="text">
          <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
        </v-card>
      </v-col>
    </v-row>
    <v-btn prepend-icon="$vuetify" @click="navigateToPage(1)">
      Button
    </v-btn>
  </div>
</template>

<script>

</script>
