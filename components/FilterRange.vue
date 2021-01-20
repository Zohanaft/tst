<template>
  <div class="button-group--wrapper d-flex flex-column">
    <span class="button-group--title component-filters--title">
      {{ title }} <sup v-if="!!sup">{{ sup }}</sup>
    </span>
    <div class="slider-input">
      <div class="slider-input-text-fields d-flex">
        <v-text-field
          :value="valueCopy[0]"
          class="mt-0 pt-0"
          hide-details
          single-line
          style="width: 80px; height: 40px"
          @change="$set(valueCopy, 0, Number($event)), update([Number($event), valueCopy[1]])"
        />
        <span>-</span>
        <v-text-field
          :value="valueCopy[1]"
          class="mt-0 pt-0"
          hide-details
          single-line
          style="width: 80px; height: 40px"
          @change="$set(valueCopy, 1, Number($event)), update([valueCopy[0], Number($event)])"
        />
      </div>
      <div class="slider-input--slider">
        <v-range-slider
          v-model="valueCopy"
          track-fill-color="primary"
          track-color="accent"
          hide-details
          color="primary"
          :min="value[0]"
          :max="value[1]"
          :step="name !== 'price' ? 1 : .1"
          @change="$debounce(()=>{
            update(valueCopy)
          },100)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilterRange',
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
    },
    type: {
      type: String,
      default: undefined
    }
  },
  data: () => {
    return {
      valueCopy: []
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
  watch: {
    selected: {
      handler (val) {
        this.$set(this.valueCopy, 0, val[0])
        this.$set(this.valueCopy, 1, val[1])
      },
      deep: true
    }
  },
  mounted () {
    this.$set(this.valueCopy, 0, this.value[0])
    this.$set(this.valueCopy, 1, this.value[1])
  },
  methods: {
    ...mapActions('catalog', ['setProperty']),
    update (val) {
      const valCopy = new Array(...val)
      this.setProperty({
        path: `$.filtersSelected[${this.index}].value`,
        value: valCopy
      })
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

.slider-input-text-fields {
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
    opacity: .5;
  }
}

::v-deep .v-slider__thumb:before {
  content: none;
}

::v-deep .v-slider__track-background {
  &:first-child {
    background: $color-accent;
  }

  &:last-child {
    background: $color-accent;
  }
}

::v-deep .v-slider--horizontal .v-slider__track-background,
::v-deep .v-slider--horizontal .v-slider__track-fill {
  height: 2px;
  border-radius: 1px;
}

// text-input

::v-deep .theme--light.v-text-field > .v-input__control > .v-input__slot:before,
::v-deep .theme--light.v-text-field > .v-input__control > .v-input__slot:after {
  content: none;
}

::v-deep .v-text-field {
  border: solid 1px #D8D8D8;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  font-size: 16px;
  line-height: 28px;
  color: $color-main;
  font-weight: normal;
}

::v-deep .v-slider__thumb {
  width: 16px;
  height: 16px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    border: solid 4px white;
    z-index: -1;
    opacity: 1;
    left: 50% !important;
    top: 50% !important;
    background: #70D24E;
    transform-origin: center;
    transform: scale(1) translate(-50%, -50%) !important;
  }
}

::v-deep .v-slider__thumb-container--active .v-slider__thumb::before {
  transform: scale(1.1) translate(-50%, -50%) !important;
}
</style>
