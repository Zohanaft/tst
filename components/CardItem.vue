<template>
  <v-card
    width="270px"
    height="365px"
  >
    <div class="card-header">
      <span class="card-header--floor">
        {{ item.floor }} этаж
      </span>
      <span class="card-header--rooms">
        {{ item.rooms }}
        <span class="divider">-</span>
        {{ item.square }} м <sup>2</sup>
      </span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'CardItem'
}
</script>
