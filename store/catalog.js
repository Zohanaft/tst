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
      value: [1, 8]
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
      value: [1, 8]
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
  async fetchItems ({ commit, state }) {
    const filters = await fetch(state.fakeApiItemsUrl)
      .then(response => response.json())
    commit('setProperty', { path: '$.items', value: filters })
  },

  setProperty ({ commit }, { path, value }) {
    commit('setProperty', { path, value })
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
