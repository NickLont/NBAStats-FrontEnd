// authentication action creators

const loginUserRequest = () => {
  return { type: 'LOGIN_USER_REQUEST' }
}
const loginUserSuccess = (data) => {
  return { type: 'LOGIN_USER_SUCCESS', data }
}
const loginUserFailure = (error) => {
  const errorMessage = `${error.response.status}, ${error.response.data.failed}` || error
  console.log('errorMessage: ', errorMessage)
  return { type: 'LOGIN_USER_FAILURE', error: errorMessage }
}
const loginUser = (user) => {
  return { type: 'LOGIN_USER', data: user }
}

export {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUser
}
