<template>
  <v-dialog
    v-model="dialog"
    eager
    max-width="1760px"
    width="100%"
  >
    <v-sheet
      class="catalog component-wrapper"
      color="lighten1 lighten-1"
    >
      <v-card
        id="catalog-scrollbar"
        color="secondary lighten-1"
      >
        <h2 class="catalog-title col-12 px-0">
          Lorem ipsum dolor sit
        </h2>
        <div class="catalog-filters container">
          <v-row class="d-flex justify-space-between">
            <div
              v-for="(filter, index) in filters"
              :key="index"
              class="filters--item"
            >
              <component
                :is="filter.type"
                :title="filter.title"
                :index="index"
                :value="filter.value"
                :name="filter.name"
                :sup="filter.sup"
                @submit-filters="update"
              />
            </div>
          </v-row>
          <v-row
            class="justify-space-between"
          >
            <transition-group
              v-if="items.length > 0"
              class="cards-wrapper"
              name="list"
              tag="div"
            >
              <CardItem
                v-for="(item) in items"
                :key="item.building_id + item.price"
                :item="item"
              />
            </transition-group>
          </v-row>
        </div>
      </v-card>
    </v-sheet>
  </v-dialog>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'

import { mapGetters, mapActions } from 'vuex'
import FilterButtons from './FilterButtons'
import FilterRange from './FilterRange'
import FilterSubmit from './FilterSubmit'

export default {
  name: 'Catalog',
  components: {
    FilterButtons,
    FilterRange,
    FilterSubmit
  },
  data: () => {
    return {
      dialog: true,
      items: [],
      // fix for server data
      map: new Map([
        ['1к', '1k'],
        ['2к', '2k'],
        ['3к', '3k'],
        ['4k', '4к'],
        ['s', 'XS'],
        ['4', '3к']
      ])
    }
  },
  computed: {
    ...mapGetters('catalog', ['getProperty']),
    filtersSelected () {
      return this.getProperty('$.filtersSelected')[0]
    },
    filters () {
      return this.getProperty('$.filters')[0]
    }
  },
  mounted () {
    this.$nextTick(() => {
      Scrollbar.init(document.querySelector('#catalog-scrollbar'))
      this.items = this.getProperty('$.items')[0]
    })
  },
  methods: {
    ...mapActions('catalog', ['setProperty']),
    update () {
      if (this.filtersSelected.length !== 0) {
        const filters = new Array(...this.filtersSelected)
        let filterString = '$.items[?('
        filters.forEach((el, key) => {
          const filterName = el.name
          const start = '@.'
          if (el.type !== 'filter-range') {
            let arr = new Array(...el.value)
            arr = arr.map((el) => {
              return `${start}${filterName}=='${this.map.get(el.toLowerCase())}'|`
            })
            filterString += arr.reduce(
              (acc, el) => {
                acc += el
                return acc
              })
          } else
          if (el.name === 'price') {
            filterString += `${start}${filterName}>${el.value[0] * 1000000}&${start}${filterName}` + '<' + `${el.value[1] * 1000000}&`
          } else {
            filterString += `${start}${filterName}>${el.value[0]}&${start}${filterName}` + '<' + `${el.value[1]}&`
          }
        })

        filterString = filterString.replace(/&$/, '') + ')]'
        this.items = this.getProperty(filterString)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  color: $color-main;

  &-title {
    padding-top: 38px;
    padding-bottom: 50px;
    font-weight: normal;
    font-size: 34px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
  }

  &-filters {

    &--submit {
      text-transform: uppercase;
      padding-top: 28px;
    }
  }
}

.filters {
  &--item {
    width: max-content;
  }
}

.cards-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
}

::v-deep .v-dialog {
  overflow: hidden;
  overflow-y: hidden;
}

#catalog-scrollbar {
  overflow: auto;
  max-height: 84vh;
  height: 84vh;
}

</style>
