<template>
  <v-container
    tag="section"
    class="container pa-0 ma-0 d-flex"
  >
    <Catalog />
  </v-container>
</template>

<script>

export default {
  name: 'Homepage',
  fetch ({ store }) {
    return store.dispatch('catalog/fetchItems')
  }
}
</script>
