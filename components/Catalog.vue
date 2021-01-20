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
              />
            </div>
          </v-row>
          <v-row
            class="justify-space-between"
          >
            <v-card
              v-for="(item, index) in items"
              :key="index"
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
      dialog: true
    }
  },
  computed: {
    ...mapGetters('catalog', ['getProperty']),
    items () {
      return this.getProperty('$.items')[0]
    },
    filters () {
      return this.getProperty('$.filters')[0]
    }
  },
  mounted () {
    this.$nextTick(() => {
      Scrollbar.init(document.querySelector('#catalog-scrollbar'))
    })
  },
  methods: mapActions('catalog', ['setProperty'])
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

.underscore {
  margin-top: 5px;

  ::v-deep .v-btn__content {
    border-bottom: solid 1px $color-primary;
    max-width: max-content;
  }

}

.filters {
  &--item {
    width: max-content;
  }
}

::v-deep .v-dialog {
  overflow: hidden;
  overflow-y: hidden;
}

#catalog-scrollbar {
  max-height: 80vh;
  overflow: auto;
}
</style>
