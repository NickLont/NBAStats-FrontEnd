import { Map } from 'immutable'

const initialState  = Map({
  loading: false,
  error: null,
  data: {
    success: null,
    token: window.localStorage.getItem("token:nba-stats") || null,
    name: window.localStorage.getItem("name:nba-stats") || null
  }
})

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST' :
      return state.set('loading', true)
        .setIn(['error'], null)
    case 'LOGIN_USER_SUCCESS' :
      return state.set('loading', false)
        .setIn(['data'], { ...action.data.data, name: action.name })
    case 'LOGIN_USER_FAILURE' :
      return state.set('loading', false)
        .setIn(['error'], action.error)
        .setIn(['data', 'success'], null)
        .setIn(['data', 'token'], null)
        .setIn(['data', 'name'], null)
    case 'LOGOUT_USER_REQUEST' :
      return state.set('loading', true)
        .setIn(['error'], null)
    case 'LOGOUT_USER_SUCCESS' :
      return state.set('loading', false)
        .setIn(['error'], null)
        .setIn(['data', 'success'], null)
        .setIn(['data', 'token'], null)
        .setIn(['data', 'name'], null)
    default:
      return state
  }
}

export default UserReducer
