<template>
  <v-card
    class="card"
    width="270px"
    height="365px"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <div class="card-header d-flex justify-space-between">
      <span class="card-header--floor">
        {{ item.floor }} этаж
      </span>
      <span class="card-header--rooms">
        {{ item.rooms }}
        <span class="card-divider">-</span>
        {{ item.square }} м <sup>2</sup>
      </span>
    </div>
    <div class="card-image-wrapper">
      <div class="card-number">
        {{ `№ ${item.number}` }}
      </div>
      <v-img
        class="card-image"
        contain
        :lazy-src="require('@/assets/img/image3.jpg')"
        :src="require('@/assets/img/image3.jpg')"
      />
    </div>
    <div class="card-prices">
      <div class="card-prices-current">
        {{ item.price }}р.
      </div>
      <div class="card-prices-square">
        {{ String(Math.ceil(item.price/item.square)) | prices }}
        р. за м<sup>2</sup>
      </div>
    </div>
    <v-btn
      class="card-more-info"
      color="primary"
      depressed
      :class="{
        show: show
      }"
    >
      Подробнее
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'CardItem',
  filters: {
    prices: (val) => {
      let priceSep = val
      priceSep = val.replace(/(\D)/g, ',')
      priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
      return priceSep
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>

.card:hover {
  box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
  transition: all 1s ease;
}

.card {
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
  padding-top: 8px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
  transition: all 1s ease;

  &-header {
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 28px;
  }

  &-header--floor {
    opacity: .5;
  }

  &-divider {
    opacity: .5;
  }

  &-image-wrapper {
    width: 250px;
    height: 250px;
    border-radius: 5px;
    border: solid 1px $color-light-gray;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-delay: .3s;
    transition: all .7s ease;
  }

  &:hover {
    .card-image-wrapper {
      height: 200px;
      transition-delay: .3s;
      transition: all .7s ease;
    }
  }

  &-image {
    max-height: 188px;
    max-width: 230px;
    transition: all 1s ease-in-out
  }

  &:hover .card-image {
    max-height: 152px;
    max-width: 186px;
    transition: all .3s ease-in-out
  }

  &-number {
    position: absolute;
    top: 0;
    right: 0;
    border-left: solid 1px $color-light-gray;
    border-bottom: solid 1px $color-light-gray;
    border-bottom-left-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 10;
    font-size: 14px;
  }

  &-prices {
    padding-top: 11px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &-current {
      font-size: 20px;
      line-height: 28px;
    }
    &-square {
      opacity: .5;
      font-size: 12px;
      line-height: 28px;
    }
  }
  &-more-info {
    visibility: collapse;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0;
    transition: all .4s;

    &.show {
      visibility: visible;
      opacity: 1;
      transition-delay: 1s;
      transition: opacity .4s;
    }
  }
}

</style>
