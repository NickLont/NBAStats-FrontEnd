import { Map } from 'immutable'

const initialState  = Map({
  loading: false,
  result: {
    error: null,
    data: null
  }
})

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_REQUEST' :
      return state.set('loading', true)
    case 'LOGIN_USER_SUCCESS' :
      return state.set('loading', false).setIn(['result', 'data'], action.data)
    case 'LOGIN_USER_FAILURE' :
      console.log('action.error: ', action.error)
      return state.set('loading', false).setIn(['result', 'error'], action.error)
    default:
      return state
  }
}

export default UserReducer
