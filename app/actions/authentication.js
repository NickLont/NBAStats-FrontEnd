// authentication action creators

const loginUserRequest = () => {
  return { type: 'LOGIN_USER_REQUEST' }
}
const loginUserSuccess = (data, user) => {
  const name = user.data.username
  return { type: 'LOGIN_USER_SUCCESS', data, name }
}
const loginUserFailure = (error) => {
  return { type: 'LOGIN_USER_FAILURE', error: error.response.data.failed || JSON.stringify(error) }
}
const loginUser = (user) => {
  return { type: 'LOGIN_USER', data: user }
}
const logoutUser = () => {
  return { type: 'LOGOUT_USER' }
}
const logoutUserRequest = () => {
  return { type: 'LOGOUT_USER_REQUEST' }
}
const logoutUserSuccess = () => {
  return { type: 'LOGOUT_USER_SUCCESS' }
}

export {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUser,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUser
}
