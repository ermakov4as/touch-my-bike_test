import axios from './axios'
import Filter from './Filter'
import { mock, ntf } from '@/services'
import router from '@/router'
import User from './User'

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
    /* this.new_order = mock.emptyOrder()
    this.new_order.offer = offer
    if (Filter.date_from) this.new_order.date_from = Filter.date_from // TODO:
    if (Filter.date_to) this.new_order.date_to = Filter.date_to
    this.new_order.need_shipping = Filter.shipping
    console.log(this.new_order) */
    if (User.role !== 'unreg') router.push({name: 'Offers', params: {id: offer.id}})
    else ntf.error('Бронирование доступно только авторизированным пользователям')   
  },
  like(offer) {
    const reqUrl = '/change_favorite'
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      offer.is_favorite = !offer.is_favorite
    })
  },
  closePreview() {
    this.new_order = null
  },
  getMore() {
    this.offers.push(...mock.shopOffers().list)
  },
  days() { // TODO: fix to new data type
    if (this.new_order && this.new_order.date_from && this.new_order.date_to) { // TODO: останется ли нужным?
      Filter.date_from = this.new_order.date_from
      Filter.date_to = this.new_order.date_to
    }
    return Math.round((Filter.date_to.value - Filter.date_from.value) / (24 * 60 * 60 * 1000) + 1)
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
  totalPrice(offer) {
    if (offer) {
      let _days
      let _price
      if (Filter.date_from && Filter.date_to) {
        _days = this.days()
        _price = searchPrice(offer.prices, _days)
        return (_days * _price)
      } else return ( 1 * offer.prices[offer.prices.length - 1].price)
    } else return (this.days() * this.pricePerDay())
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
