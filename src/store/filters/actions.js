import { createAction } from 'redux-actions'

export const requestCountries = createAction('filters/REQUEST_COUNTRIES')
export const receiveCountries = createAction('filters/RECEIVE_COUNTRIES')
export const filterChange = createAction('filters/FILTER_CHANGE')
