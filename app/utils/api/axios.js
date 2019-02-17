import Axios from 'axios'

// create a new instance of axios with a custom config.
const axios = Axios.create({
  baseURL: 'http://localhost:3010/'
  // headers: { 'X-Custom-Header': 'foobar' }
})

export default axios
