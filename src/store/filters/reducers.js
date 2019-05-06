import { handleActions } from 'redux-actions'

import { receiveCountries, filterChange } from './actions'

const initialState = Object.freeze({
  countries: [],
  leafRust: {
    RESISTANT: false,
    TOLERANT: false,
    SUSCEPTIBLE: false,
  },
  quality: [],
  selected: {
    countries: [],
    beanSize: [],
    qualityPotential: [],
    yieldPotential: [],
    leafRust: [],
    coffeeBerry: [],
    nematodes: [],
  }
})

export default handleActions({
  [receiveCountries] (state, { payload }) {
    return {
      ...state,
      countries: payload,
    }
  },

  [filterChange] (state, { payload }) {
    const {
      name,
      value,
    } = payload
    
    const index = state.selected[name].indexOf(value)
    const values = state.selected[name]

    if (index === -1) {
      values.push(value)
    } else {
      values.splice(index, 1)
    }

    return {
      ...state,
      selected: {
        ...state.selected,
        [name]: values,
      }
    }
  },
}, initialState)
