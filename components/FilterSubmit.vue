<template>
  <div class="catalog-filters--submit d-flex flex-column">
    <v-btn
      aria-label="Применить"
      width="200px"
      color="primary"
      dark
      depressed
    >
      {{ value[0] }}
    </v-btn>
    <v-btn
      aria-label="сбросить фильтр"
      class="underscore"
      width="200px"
      color="secondary"
      small
      text
      dark
      depressed
    >
      {{ value[1] }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FiltersSubmit',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    name: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    }
  }
}
</script>
