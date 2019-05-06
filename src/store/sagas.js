import { takeEvery, takeLatest, put, all } from 'redux-saga/effects';

import { requestData, requestFilters } from './actions'
import { requestVarieties, receiveVarieties } from './varieties/actions'

function * listenRequestData () {
  yield takeEvery(requestData.toString(), function * () {
    yield put(requestVarieties())
  })
}

function * listenReceiveData () {
  yield takeLatest(receiveVarieties.toString(), function * ({ payload }) {
    if (!(payload instanceof Error)) {
      yield put(requestFilters())
    }
  })
}

export default function * () {
  yield all([
    listenRequestData(),
    listenReceiveData(),
  ]);
}
