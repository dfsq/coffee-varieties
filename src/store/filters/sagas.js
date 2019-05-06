import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getCountries } from 'src/api'
import { requestFilters } from 'src/store/actions'

import {
  requestCountries,
  receiveCountries,
} from './actions'

function * listenRequestFilters () {
  yield takeEvery(requestFilters.toString(), function * () {
    const countries = yield getCountries()
    yield put(receiveCountries(countries))
  })
}

function * listenRequestCountries () {
  yield takeEvery(requestCountries.toString(), function * () {
    try {
      const countries = yield call(getCountries)
      yield put(receiveCountries(countries))
    } catch (err) {
      yield put(receiveCountries(err))
    }
  });
}

export default function * () {
  yield all([
    listenRequestFilters(),
    listenRequestCountries(),
  ]);
}
