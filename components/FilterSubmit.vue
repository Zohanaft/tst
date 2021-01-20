<template>
  <div class="catalog-filters--submit d-flex flex-column">
    <v-btn
      aria-label="Применить"
      width="200px"
      height="40px"
      color="primary"
      dark
      depressed
      @click="$emit('submit-filters')"
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
      @click="$store.dispatch('catalog/clearFilters')"
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

<style lang="scss" scoped>
.underscore {
  margin-top: 5px;

  ::v-deep .v-btn__content {
    border-bottom: solid 1px $color-primary;
    max-width: max-content;
  }

}
</style>
