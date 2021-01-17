<template>
  <v-dialog
    v-model="dialog"
    eager
    max-width="1760px"
    width="100%"
    scrollable
  >
    <v-sheet
      class="catalog component-wrapper"
      color="lighten1 lighten-1"
    >
      <v-card
        color="secondary lighten-1"
      >
        <h2 class="catalog-title col-12 px-0">
          Lorem ipsum dolor sit
        </h2>
        <div class="catalog-filters container">
          <v-row>
            <div class="catalog-filters col">
              <span class="component-filters component-filters--title">
                КОМНАТЫ
              </span>
              <div class="button-group d-flex justify-space-between">
                <v-btn
                  v-for="(room,index) in rooms"
                  :key="index"
                  class="px-0"
                  color="primary"
                  depressed
                  dark
                  min-width="47px"
                  height="40px"
                  :value="room"
                >
                  {{ room }}
                </v-btn>
              </div>
            </div>
            <div class="catalog-filters col">
              <span class="component-filters component-filters--title">
                КОМНАТЫ
              </span>
              <div class="button-group d-flex justify-space-between">
                <v-btn
                  v-for="(room,index) in rooms"
                  :key="index"
                  class="px-0"
                  color="primary"
                  depressed
                  dark
                  min-width="47px"
                  height="40px"
                  :value="room"
                >
                  {{ room }}
                </v-btn>
              </div>
            </div>
            <div class="catalog-filters col">
              <span class="component-filters component-filters--title">
                КОМНАТЫ
              </span>
              <div class="button-group d-flex justify-space-between">
                <v-btn
                  v-for="(room,index) in rooms"
                  :key="index"
                  class="px-0"
                  color="primary"
                  depressed
                  dark
                  min-width="47px"
                  height="40px"
                  :value="room"
                >
                  {{ room }}
                </v-btn>
              </div>
            </div>
            <div class="catalog-filters col">
              <span class="component-filters component-filters--title">
                КОМНАТЫ
              </span>
              <div class="button-group d-flex justify-space-between">
                <v-btn
                  v-for="(room,index) in rooms"
                  :key="index"
                  class="px-0"
                  color="primary"
                  depressed
                  dark
                  min-width="47px"
                  height="40px"
                  :value="room"
                >
                  {{ room }}
                </v-btn>
              </div>
            </div>
            <div class="catalog-filters col">
              <span class="component-filters component-filters--title">
                КОМНАТЫ
              </span>
              <div class="button-group d-flex justify-space-between">
                <v-btn
                  v-for="(room,index) in rooms"
                  :key="index"
                  class="px-0"
                  color="primary"
                  dark
                  depressed
                  min-width="47px"
                  height="40px"
                  :value="room"
                >
                  {{ room }}
                </v-btn>
              </div>
            </div>
          </v-row>
        </div>
      </v-card>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Catalog',
  data: () => {
    return {
      dialog: true,
      rooms: [
        'S',
        '1к',
        '2к',
        '3к'
      ],
      selectedRooms: []
    }
  },
  computed: {
    ...mapGetters('catalog', ['getProperty']),
    items () {
      return this.getProperty('$.items')
    }
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
}

.component-filters {
  &--title {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
  }
}

</style>
