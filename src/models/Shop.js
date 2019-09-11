import axios from './axios'
import Filter from './Filter'
import { mock } from '@/services'

export default {
  offers: [],
  total_offers: 0,
  previewOffer: null,
  updateOffers() {
    const reqUrl = '/shop' + Filter.getRequest()
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      res = mock.shopOffers()
      this.offers = res.list
      this.total_offers = res.count
    })
  },
  preview(offer) {
    this.previewOffer = offer
  },
  closePreview() {
    this.previewOffer = null
  },
  getMore() {
    this.offers.push(...mock.shopOffers().list)
  },
  book() {
    console.log('Забронировали бы' + JSON.stringify(this.previewOffer))
  },
  // Обработка предложений (типа computed для Offer из Шопа)
  resultPrice(offer) {
    console.log('подсчитали итоговую стоимость оффера id=' + offer.id)
    // = f(offer.prices, Filter.date_from, Filter.date_to)
    return mock.resultPriceExample()
  }
}
