import jp from 'jsonpath'

export const state = () => ({
  items: [
  ],
  filters: [
    {
      type: 'filter-buttons',
      title: 'КОМНАТЫ',
      name: 'rooms',
      value: [
        'S',
        '1к',
        '2к',
        '3к'
      ]
    },
    {
      type: 'filter-range',
      title: 'ЭТАЖ',
      name: 'floor',
      value: [1, 12]
    },
    {
      type: 'filter-range',
      title: 'ПЛОЩАДЬ, м',
      sup: '2',
      name: 'square',
      value: [10, 147]
    },
    {
      type: 'filter-range',
      title: 'СТОИМОСТЬ, млн. р.',
      name: 'price',
      value: [1.3, 25.6]
    },
    {
      type: 'filter-submit',
      title: 'Применить',
      name: 'submit',
      value: [
        'Применить',
        'сбросить фильтр'
      ]
    }
  ],
  filtersSelected: [
    {
      type: 'filter-buttons',
      title: 'КОМНАТЫ',
      name: 'rooms',
      value: [
        'S',
        '1к',
        '2к',
        '3к'
      ]
    },
    {
      type: 'filter-range',
      title: 'ЭТАЖ',
      name: 'floor',
      value: [1, 12]
    },
    {
      type: 'filter-range',
      title: 'ПЛОЩАДЬ, м',
      sup: '2',
      name: 'square',
      value: [10, 147]
    },
    {
      type: 'filter-range',
      title: 'СТОИМОСТЬ, млн. р.',
      name: 'price',
      value: [1.3, 25.6]
    }
  ],
  defaultFilters: [
    {
      type: 'filter-buttons',
      title: 'КОМНАТЫ',
      name: 'rooms',
      value: [
        'S',
        '1к',
        '2к',
        '3к'
      ]
    },
    {
      type: 'filter-range',
      title: 'ЭТАЖ',
      name: 'floor',
      value: [1, 12]
    },
    {
      type: 'filter-range',
      title: 'ПЛОЩАДЬ, м',
      sup: '2',
      name: 'square',
      value: [10, 147]
    },
    {
      type: 'filter-range',
      title: 'СТОИМОСТЬ, млн. р.',
      name: 'price',
      value: [1.3, 25.6]
    }
  ],
  fakeApiItemsUrl: 'https://f9e7530b-31d1-438d-8867-89e624200490.mock.pstmn.io/items'
})

export const mutations = {
  setProperty (state, { path, value }) {
    state = jp.value(state, path, value)
  }
}

export const actions = {
  fetchItems ({ commit, state }) {
    const items = [
      {
        building_id: 73,
        building_name: '1 этап 1а корпуса',
        floor: 10,
        id: 23329,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 2956317,
        rooms: 1,
        size: 'XS',
        square: 23.66
      },
      {
        building_id: 74,
        building_name: '1 этап 1а корпуса',
        floor: 4,
        id: 20822,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 2992701,
        rooms: 1,
        size: 'XS',
        square: 23.87
      },
      {
        building_id: 75,
        building_name: '1 этап 1а корпуса',
        floor: 4,
        id: 20382,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 4952721,
        rooms: 2,
        size: '2k',
        square: 42.87
      },
      {
        building_id: 75,
        building_name: '1 этап 1а корпуса',
        floor: 4,
        id: 20332,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 8862732,
        rooms: 3,
        size: '3k',
        square: 42.87
      },
      {
        building_id: 32,
        building_name: '1 этап 1а корпуса',
        floor: 10,
        id: 20328,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 3956317,
        rooms: 1,
        size: '1k',
        square: 24.99
      },
      {
        building_id: 37,
        building_name: '1 этап 1а корпуса',
        floor: 10,
        id: 20320,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 3956317,
        rooms: 1,
        size: 'XS',
        square: 24.99
      },
      {
        building_id: 17,
        building_name: '1 этап 1а корпуса',
        floor: 10,
        id: 33320,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 5956317,
        rooms: 1,
        size: '2k',
        square: 45.36
      },
      {
        building_id: 87,
        building_name: '1 этап 1а корпуса',
        floor: 10,
        id: 33320,
        is_studio: 1,
        number: '163',
        plan: '/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg',
        porch: 3,
        price: 9956317,
        rooms: 4,
        size: '4',
        square: 66.60
      }
    ]
    commit('setProperty', { path: '$.items', value: items })
  },

  setProperty ({ commit }, { path, value }) {
    commit('setProperty', { path, value })
  },

  clearFilters ({ commit, state }) {
    commit('setProperty', {
      path: '$.filtersSelected',
      value: JSON.parse(JSON.stringify(state.defaultFilters))
    })
  }
}

export const getters = {
  getProperty: state => (path) => {
    return jp.query(state, path)
  },

  getPropertyAndPath: state => (path) => {
    return jp.nodes(state, path).map((el) => {
      el.path = jp.stringify(el.path)
      return el
    })
  }
}
