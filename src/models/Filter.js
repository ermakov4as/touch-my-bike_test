import Collections from './Collections'
import Shop from './Shop'

export default new Proxy(
  {
    island: null,
    beach: null,
    brand: null,
    bike: null,
    date_from: null,
    date_to: null,
    year_from: null,
    year_to: null,
    akp: false,
    abs: false,
    esp: false,
    deposit: false,
    shipping: false,
    cheapFirst: true,
    oldFirst: false,
    getRequest() {
      return '?req=123&sdf=555'
    }
  },
  {
    set(filter, prop, value) {
      const oldValue = filter[prop]
      filter[prop] = value
      if (prop == 'brand' && oldValue != value) {
        filter.bike = null
        Collections.updateBikes(value)
      }
      if (prop == 'island' && oldValue != value) {
        filter.beach = null
        Collections.updateBeaches(value)
      }
      Shop.updateOffers()
      return true
    }
  }
)
