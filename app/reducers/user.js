import { Map } from 'immutable'

const initialState  = Map({
  loading: false,
  result: {
    error: null,
    data: {
      success: null,
      token: window.localStorage.getItem("token:nba-stats") || null,
      name: window.localStorage.getItem("name:nba-stats")
    }
  }
})

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST' :
      return state.set('loading', true)
        .setIn(['result', 'data'], null)
        .setIn(['result', 'error'], null)
    case 'LOGIN_USER_SUCCESS' :
      return state.set('loading', false).setIn(['result', 'data'], { ...action.data.data, name: action.name })
    case 'LOGIN_USER_FAILURE' :
      return state.set('loading', false).setIn(['result', 'error'], action.error)
    default:
      return state
  }
}

export default UserReducer
