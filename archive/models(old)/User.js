import Vue from 'vue'
import Cookies from 'js-cookie'
import axios, { BEARER_FIELD } from './axios'

export default {
  registration(cred) {
    const data = {
      ...cred,
      password1: cred.password,
      password2: cred.password,
      username: cred.name
    }
    return axios({
      method: 'post',
      url: '/users/registration/',
      data: {
        autorization: false,
        ...data
      }
    }).then(res => {
      console.log(res)
      Cookies.set(BEARER_FIELD, res.key)
      return res.key
    })
  },
  login: cred =>
    axios({
      method: 'post',
      url: '/users/login/',
      data: {
        autorization: false,
        ...cred
      }
    }).then(res => {
      Cookies.set(BEARER_FIELD, res.key)
      return res.key
    }),
  logout: () => Cookies.remove(BEARER_FIELD),
  isAutorized: () => !!Cookies.get(BEARER_FIELD),
  info: () => axios.get('/users/user/'),
  example: example
}

function example() {
  return {
    avatar: Vue.faker().image.avatar(),
    surname: Vue.faker().name.lastName(),
    name: Vue.faker().name.firstName(),
    number: Vue.faker().phone.phoneNumberFormat(),
    island: Vue.faker().address.streetName(),
    beach: Vue.faker().address.streetName(),
    mail: Vue.faker().internet.email()
  }
}
