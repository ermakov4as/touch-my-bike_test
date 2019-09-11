import Cookies from 'js-cookie'
import axios, { BEARER_FIELD } from './axios'

import { mock, ntf } from '@/services'

import router from '../router'

export const ROLES = {
  TOURIST: 'tourist',
  OWNER: 'owner',
  UNREG: 'unreg'
}

export default {
  role: null,
  email: null,
  avatar: null,
  password: null,
  agree: null,
  remember: null,
  firstName: null,
  lastName: null,
  phone: null,
  // Получает информацию о пользователе по токену
  async autorization() {
    const token = Cookies.get(BEARER_FIELD)
    if (token) {
      await axios.empty('/get-info').then(userInfo => {
        console.log(userInfo)
        this.role = token === 'owner' ? ROLES.OWNER : ROLES.TOURIST
        this.email = mock.email()
        this.avatar = mock.avatar()
        this.firstName = mock.user().firstName
        this.lastName = mock.user().lastName
        this.phone = mock.user().phone
      })
    } else {
      this.role = ROLES.UNREG
    }
  },
  logout() {
    Cookies.remove(BEARER_FIELD)
    window.location = '/'
  },
  async login() {
    if (!this.email && !this.password) {
      ntf.error('укажите email и пароль')
      return
    }
    let token = await axios.empty('/login')
    console.log(token)
    token = this.email
    Cookies.set(BEARER_FIELD, token)
    await this.autorization()
    router.afterAutorization()
  },
  async registration() {
    if (!this.email) {
      ntf.error('Укажите email')
      return
    }
    let token = await axios.empty('/registration')
    console.log(token)
    token = this.email
    Cookies.set(BEARER_FIELD, token)
    await this.autorization()
    router.afterAutorization()
  },
  async loginF() {
    // TODO: авторизоация через фейсбук
    Cookies.set(BEARER_FIELD, 'token')
    await this.autorization()
  },
  async loginG() {
    // TODO: авторизоация через Google
    Cookies.set(BEARER_FIELD, 'token')
    await this.autorization()
  }
}
