import User from './User'

export default {
  filter: false,
  get login() {
    return this.__login
  },
  set login(val) {
    User.checkSavedPassword()
    this.__registration = false
    this.__login = val
    if (this.__burger) this.__burger = false
  },
  get registration() {
    return this.__registration
  },
  set registration(val) {
    this.__login = false
    this.__registration = val
  },
  get burger() {
    return this.__burger
  },
  set burger(val) {
    this.__burger = val
  },
  __login: false,
  __registration: false,
  __burger: false
}
