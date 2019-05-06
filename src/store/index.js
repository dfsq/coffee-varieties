import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import {
  varietiesReducers,
  varietiesSagas
} from './varieties'
import {
  filtersReducers,
  filtersSagas,
} from './filters'

import { requestData } from './actions'
import sagas from './sagas'

const rootReducer = combineReducers({
  varieties: varietiesReducers,
  filters: filtersReducers,
});

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({})
const rootSaga = function * () {
  yield all([
    sagas(),
    varietiesSagas(),
    filtersSagas(),
  ])
}

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)
store.dispatch(requestData())

export default store
