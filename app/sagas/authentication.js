import { call, put, takeLatest, select } from "redux-saga/effects"
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
    window.localStorage.setItem('token:nba-stats', response.data.token)
    window.localStorage.setItem('name:nba-stats', user.data.username)
    yield put(AuthenticationActions.loginUserSuccess(response, user))
    yield call(history.push, '/player')
  } catch (error) {
    window.localStorage.removeItem('token:nba-stats')
    window.localStorage.removeItem('name:nba-stats')
    yield put(AuthenticationActions.loginUserFailure(error))
  }
}
function* logout() {
  try {
    yield put(AuthenticationActions.logoutUserRequest())
    window.localStorage.removeItem('token:nba-stats')
    window.localStorage.removeItem('name:nba-stats')
    yield put(AuthenticationActions.logoutUserSuccess())
    yield call(history.push, '/authentication')
  }catch (error) {
    yield null
  }
}

export function* authenticationSagaWatcher() {
  yield takeLatest("LOGIN_USER", login)
  yield takeLatest("LOGOUT_USER", logout)
}
