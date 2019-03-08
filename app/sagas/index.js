import { all, fork, select, call } from 'redux-saga/effects'
import { userSagaWatcher } from './user'
import { authenticationSagaWatcher } from './authentication'

// single entry point to start all Sagas at once
export function* rootSaga() {
  yield all([
    fork(userSagaWatcher),
    fork(authenticationSagaWatcher)
  ])
}
