import User from './User'

export default {
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
  get filters() {
    return this.__filters
  },
  set filters(val) {
    this.__filters = val
  },
  get licenseAgreement() {
    // console.log(this.__licenseAgreement)
    return this.__licenseAgreement
  },
  set licenseAgreement(val) {
    this.__licenseAgreement = val
  },
  __login: false,
  __registration: false,
  __burger: false,
  __filters: true,
  __licenseAgreement: false
}
