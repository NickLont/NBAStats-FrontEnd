import axios from './axios'

export const loginUser = async (user) => {
  let res
  try {
    res = await axios.post('/user/signin', user)
  }
  catch (e) {
    console.log('axios error: ', e)
    throw e
  }
  return res
}
