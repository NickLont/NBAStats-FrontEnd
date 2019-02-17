import { call, put, takeLatest } from "redux-saga/effects"
import { AuthenticationActions } from 'actions'
import * as Api from 'utils/api'
import history from 'historyConfig'

/**
 *
 * @param user {object} The user object with username and password string properties
 */
function* login(user) {
  try {
    yield put(AuthenticationActions.loginUserRequest())
    const response = yield call(Api.Authentication.loginUser, user.data)
    yield put(AuthenticationActions.loginUserSuccess(response))
    history.push('/')
  } catch (error) {
    yield put(AuthenticationActions.loginUserFailure(error))
  }
}

export function* authenticationSagaWatcher() {
  yield takeLatest("LOGIN_USER", login)
}
