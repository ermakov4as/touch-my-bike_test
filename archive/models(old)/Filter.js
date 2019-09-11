// import Color from './Color'
// import Brand from './Brand'
// import Bike from './Bike'
import Offer from './Offer'
import Sequence from './Sequence'

import { PAGE_SIZE } from '@/config'

export default {
  connect(context, attr) {
    this._ctx = context
    this._attr = attr
    const filter = this
    this._ctx[this._attr] = new Proxy(empty(), {
      set(target, prop, val) {
        if (val === 'NEXT') {
          switch (target[prop]) {
            case true:
              val = false
              break
            case false:
              val = null
              break
            case null:
              val = true
              break
          }
        }
        Reflect.set(target, prop, val)
        Offer.update(filter + '')
        return true
      }
    })
  },
  toString() {
    let filter = { ...this._ctx[this._attr] }
    filter.color && (filter.color = filter.color.value)
    filter.bike && (filter.bike = filter.bike.id)
    filter.brand && (filter.brand = filter.brand.id)
    filter.production_year = filter.year
    delete filter.year
    filter.automatic_transmission = filter.akp
    delete filter.akp
    filter.ordering && (filter.ordering = filter.ordering.value)
    filter.page_size = filter.size
    delete filter.size
    return (
      '?' +
      Object.entries(filter)
        .filter(([, v]) => v !== null)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    )
  }
}

function empty() {
  return {
    island: null,
    beach: null,
    date_from: null,
    date_to: null,
    brand: null,
    bike: null,
    year_from: null,
    year_to: null,
    akp: null,
    abs: null,
    esp: null,
    deposit: null,
    shipping: null,
    owner: null,
    color: null,
    ordering: Sequence.list()[0],
    page: 1,
    size: PAGE_SIZE
  }
}

// function example() {
//   return {
//     abs: true,
//     akp: false,
//     bike: Bike.example(),
//     brand: Brand.example(),
//     color: Color.example(),
//     deposit: 450,
//     esp: false,
//     year: null,
//     owner: null,
//     shipping: null,
//     ordering: Sequence.example(),
//     page: PAGE,
//     size: PAGE_SIZE
//   }
// }
