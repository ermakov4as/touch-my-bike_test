export default {
  filter: false,
  get login() {
    return this.__login
  },
  set login(val) {
    this.__registration = false
    this.__login = val
  },
  get registration() {
    return this.__registration
  },
  set registration(val) {
    this.__login = false
    this.__registration = val
  },
  __login: false,
  __registration: false
}
