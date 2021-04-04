<template>
  <span class="language-selector">
    <v-menu bottom left content-class="language-menu">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          <img :src="require(`@/assets/flags/${$i18n.locale}.svg`)" alt="" />
          {{ $t(`languages.${$i18n.locale}`) }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in languages" :key="item">
          <v-btn text @click.prevent="$i18n.locale = item">
            <img :src="require(`@/assets/flags/${item}.svg`)" alt="" />
            <span>{{ $t(`languages.${item}`) }}</span>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </span>
</template>

<script>
export default {
  name: "LanguageSelector",
  computed: {
    languages() {
      return this.$i18n.availableLocales;
    },
  },
};
</script>

<style lang="scss">
.language-selector,
.language-menu {
  .v-btn {
    svg,
    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
}
</style>
