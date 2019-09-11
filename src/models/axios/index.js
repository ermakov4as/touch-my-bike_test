import Cookies from 'js-cookie'
import axios from 'axios'
import { handlerError400, handlerError401 } from './errorHandlers'

export const BEARER_FIELD = 'tmBwebToken'

export const HOST = 'http://165.22.24.80:8000'

axios.interceptors.request.use(function(config) {
  const autorization = // Всегда требуем авторизацию, если явно в данных не передали autorization=false
    config.data && config.data.autorization === false ? false : true
  config.url = HOST + config.url
  if (autorization)
    config.headers = {
      Authorization: 'Bearer ' + Cookies.get(BEARER_FIELD)
    }
  return config
})

axios.interceptors.response.use(
  function(res) {
    return res.data
  },
  function(error) {
    if (!error.response) return Promise.reject(error)
    switch (error.response.status) {
      case 403:
        Cookies.remove(BEARER_FIELD)
        return Promise.reject(error)
      case 401:
        return Promise.reject(handlerError401(error.response.data))
      case 400:
        return Promise.reject(handlerError400(error.response.data))
      default:
        return Promise.reject(error)
    }
  }
)

axios.empty = url => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Test request: ${url}`), 300)
  })
}

export default axios
