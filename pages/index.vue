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
  async fetch ({ store }) {
    return await store.dispatch('catalog/fetchItems')
  }
}
</script>
