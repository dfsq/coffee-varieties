import { handleActions } from 'redux-actions'

import {
  requestVarieties,
  receiveVarieties,
} from './actions'

const initialState = Object.freeze({
  loading: false,
  error: null,
  entries: null,
})

export default handleActions({
  [requestVarieties] (state) {
    return {
      ...state,
      loading: true,
    }
  },

  [receiveVarieties]: {
    next (state, { payload }) {
      return {
        ...initialState,
        entries: payload,
      }
    },

    throw (state, { payload }) {
      return {
        ...initialState,
        error: payload,
      }
    },
  }
}, initialState)

