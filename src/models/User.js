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
  tmp: {
    password: null,
    remember: false,
    is_owner: false,
    agree: false
  },
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
    Cookies.remove('password')
    Cookies.remove('email')
    window.location = '/'
  },
  async login() {
    if (!this.email || !this.tmp.password) {
      ntf.error('укажите email и пароль')
      return
    }
    if (this.tmp.remember) {
      this.password = this.tmp.password
      Cookies.set('password', this.password)
      Cookies.set('email', this.email)
    }
    let token = await axios.empty('/login')
    console.log(token)
    token = this.email
    Cookies.set(BEARER_FIELD, token)
    await this.autorization()
    router.afterAutorization()
    this.cleanTmpData()
  },
  async registration() {
    if (!this.email) {
      ntf.error('Укажите email')
      return
    }
    if (!this.tmp.agree) {
      ntf.error('Сначала прочитайте и примите условия Пользовательского соглашения')
      return
    }
    if (this.tmp.is_owner === "true") { // TODO: можно ли без костыля?
      this.tmp.is_owner = true
    } else if (this.tmp.is_owner === "false") {
      this.tmp.is_owner = false
    }
    let token = await axios.empty('/registration')
    console.log(token)
    token = this.email
    Cookies.set(BEARER_FIELD, token)
    await this.autorization()
    router.afterAutorization()
    this.cleanTmpData()
  },
  async loginF() {
    // TODO: авторизоация через фейсбук
    let token = await axios.empty('/login/facebook')
    console.log(token)
    token = 'THE_TOKEN_WILL_BE_HERE'
    Cookies.set(BEARER_FIELD, 'token')
    await this.autorization()
    router.afterAutorization()
  },
  async loginG() {
    // TODO: авторизоация через Google
    let token = await axios.empty('/login/google')
    console.log(token)
    token = 'THE_TOKEN_WILL_BE_HERE'
    Cookies.set(BEARER_FIELD, 'token')
    await this.autorization()
    router.afterAutorization()
  },
  cleanTmpData() {
    this.tmp.password = null
    this.tmp.remember = false
    this.tmp.agree = false
    this.tmp.is_owner = false
  },
  checkSavedPassword() {
    let _password = null
    let _email = null
    _password = Cookies.get('password')
    _email = Cookies.get('email')
    if (_password && _email) {
      this.password = _password
      this.tmp.password = _password
      this.email = _email
    }
  }
}
