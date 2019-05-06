import { delay, take, put, all, call } from 'redux-saga/effects';

import { getVarieties } from 'src/api'

import {
  requestVarieties,
  receiveVarieties,
} from './actions'

const RETRY_ATTEMPTS = 3
const RETRY_DELAY = 2000

function * requestApi () {
  let lastError = null

  for (let i = 0; i < RETRY_ATTEMPTS; i++) {
    try {
      return yield call(getVarieties)
    } catch (err) {
      lastError = err

      if (i < RETRY_ATTEMPTS - 1) {
        yield delay(RETRY_DELAY)
      }
    }
  }

  throw lastError
}

function * listenRequestVarieties () {
  while (true) {
    yield take(requestVarieties.toString())

    try {
      const varieties = yield call(requestApi)
      yield put(receiveVarieties(varieties))
    } catch (err) {
      yield put(receiveVarieties(err))
    }
  }
}

export default function * () {
  yield all([
    listenRequestVarieties(),
  ]);
}
