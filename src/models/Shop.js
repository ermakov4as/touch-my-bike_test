import axios from './axios'
import Filter from './Filter'
import { mock, ntf } from '@/services'

export default {
  offers: [],
  new_order: null,
  total_offers: 0,
  updateOffers() {
    const reqUrl = '/shop' + Filter.getRequest()
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      res = mock.shopOffers()
      this.offers = res.list
      this.total_offers = res.count
    })
  },
  updatePotentialCount() {
    const reqUrl = '/shop/count' + Filter.getRequest()
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      res = mock.shopOffers().count
      this.total_offers = res
    })
  },
  preview(offer) {
    this.new_order = mock.emptyOrder()
    this.new_order.offer = offer
    if (Filter.date_from) this.new_order.date_from = Filter.date_from
    if (Filter.date_to) this.new_order.date_to = Filter.date_to
    this.new_order.need_shipping = Filter.shipping
  },
  like(offer) {
    const reqUrl = '/change_favourite'
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      offer.is_favourite = !offer.is_favourite
    })
  },
  closePreview() {
    this.new_order = null
  },
  getMore() {
    this.offers.push(...mock.shopOffers().list)
  },
  days() {
    if (this.new_order) {
      Filter.date_from = this.new_order.date_from
      Filter.date_to = this.new_order.date_to
    }
    if (!checkDays(Filter.date_from, Filter.date_to)) {
      ntf.error('Дата окончания аренды не может быть раньше даты её начала')
      Filter.date_to = null
      this.new_order.date_to = null
    }
    return Math.round((Filter.date_to - Filter.date_from) / (24 * 60 * 60 * 1000))
  },
  pricePerDay() {
    let _days = this.days()
    let _price = searchPrice(this.new_order.offer.prices, _days)
    if (!_price) {
      ntf.error('Данный байк невозможно арендовать на заданное количество дней')
      ntf.warn(`Минимальное количество дней для аренды: ${this.new_order.offer.prices[0].days}`)
      Filter.date_to = null
      this.new_order.date_to = null
    } else return _price
  },
  totalPrice() {
    return (this.days() * this.pricePerDay())
  },
  book() {
    console.log('Забронировали бы: ' + JSON.stringify(this.new_order))
  }
}

function searchPrice(prices, days) {
  let _actualPrice = null
  let i = 1
  if (prices.length === 1) {
    if (days >= prices[0].days) _actualPrice = prices[0].price
  } else {
    while (i < prices.length) {
      if (days >= prices[i-1].days) _actualPrice = prices[i-1].price
      else break
      i += 1
    }
  }
  return _actualPrice
}

function checkDays(date_from, date_to) {
  if (date_from > date_to) return false
  else return true
}
