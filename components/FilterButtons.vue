<template>
  <div class="button-group--wrapper d-flex flex-column">
    <span class="button-group--title component-filters--title">
      {{ title }} <sup v-if="!!sup">{{ sup }}</sup>
    </span>
    <div class="button-group">
      <v-btn
        v-for="(el, i) in value"
        :key="i"
        class="pa-0 my-0 button-group--button"
        :class="{active: !!selected.find(item => item === el)}"
        depressed
        :color="!!selected.find(item => item === el)
          ? 'primary'
          : 'secondary'"
        :text="!selected.find(item => item === el)"
        :dark="!!selected.find(item => item === el)"
        :outlined="!selected.find(item => item === el)"
        min-width="47px"
        height="40px"
        :value="el"
        @click="buttonLogick(el)"
      >
        {{ el }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterButtons',
  props: {
    index: {
      type: Number,
      default: null
    },
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
    },
    sup: {
      type: String,
      default: undefined
    }
  },
  computed: {
    ...mapGetters('catalog', ['getProperty']),
    selected: {
      get () {
        return this.getProperty(`$.filtersSelected[${this.index}].value`)[0]
      }
    }
  },
  methods: {
    ...mapActions('catalog', ['setProperty']),
    buttonLogick (el) {
      const item = this.selected.find(item => item === el)
      if (item) {
        const arr = new Array(...this.selected)
        arr.splice(this.selected.indexOf(item), 1)
        this.setProperty({
          path: `$.filtersSelected[${this.index}].value`,
          value: arr
        })
      } else {
        const arr = new Array(...this.selected)
        arr.push(el)
        this.setProperty({
          path: `$.filtersSelected[${this.index}].value`,
          value: arr
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.component-filters {
  &--title {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
  }
}

.button-group {
  &--button {
    font-weight: bold;
    line-height: 28px;
    margin-right: 4px;
    margin-left: 0px;

    &:last-child {
      margin-right: 0px;
    }
  }
}

::v-deep .theme--light.v-btn.v-btn--outlined.v-btn--text {
  border-color: $color-accent;
}
</style>
