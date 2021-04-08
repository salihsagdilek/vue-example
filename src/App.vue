<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer />
      <v-tabs centered dark icons-and-text>
        <v-tabs-slider></v-tabs-slider>
        <v-tab :to="{ name: 'todo.all' }" exact>
          {{ $t("menu.todo") }}
          <v-icon>mdi-format-list-checks</v-icon>
        </v-tab>
        <v-tab :to="{ name: 'notes' }">
          {{ $t("menu.notes") }}
          <v-icon>mdi-calendar-text</v-icon>
        </v-tab>
        <v-tab :to="{ name: 'tasks' }">
          {{ $t("menu.tasks") }}
          <v-icon>mdi-calendar-check</v-icon>
        </v-tab>
        <v-tab :to="{ name: 'desserts' }">
          {{ $t("menu.desserts") }}
          <v-icon>mdi-account-details-outline</v-icon>
        </v-tab>
      </v-tabs>
      <v-spacer />
      <language-selector />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LanguageSelector from "./components/LanguageSelector";

export default {
  name: "App",
  components: { LanguageSelector },
};
</script>
