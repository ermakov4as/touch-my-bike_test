import axios from './axios'
import Filter from './Filter'
import Collections from './Collections'
import { mock, ntf } from '@/services'

export default {
  offers: [],
  total_offers: 0,
  currentOffer: null,
  updateOffers() {
    const reqUrl = '/garage' + Filter.getRequest()
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      res = mock.garageOffers()
      this.offers = res.list
      this.total_offers = res.count
    })
  },
  changeOrder() {
    Filter.oldFirst = !Filter.oldFirst
  },
  showOffer(params) {
    const reqUrl = `/garage/${params.id}/`
    return axios.empty(reqUrl).then(res => {
      console.log(res)
      res = mock.garageCurrentOffer(params.id)
      if (!params.showMode) {
        this.currentOffer = res
        Collections.updateBikes(this.currentOffer.brand)
        Collections.updateBeaches(this.currentOffer.island)
      }
    })
  },
  createOffer() {
    this.currentOffer = mock.emptyOffer()
  },
  addImage(image) {
    const form = new FormData()
    form.append('file', image)
    const reqUrl = '/garage/upload_image/'
    return axios.empty(reqUrl, form).then(res => {
      console.log(res)
      ntf.success('Фото загружено')
      let _fakeID = 0
      if (this.currentOffer.images[0])
        _fakeID = this.currentOffer.images[this.currentOffer.images.length - 1]
          .id
      res = mock.newImage(_fakeID)
      this.currentOffer.images.push(res)
    })
  },
  removeImage(id) {
    this.currentOffer.images.splice(this.currentOffer.images.findIndex(image => image.id === id), 1)
  },
  changeBrand() {
    this.currentOffer.bike = null
    if (this.currentOffer.brand) Collections.updateBikes(this.currentOffer.brand)
    else Collections.bikes = []
  },
  changeIsland() {
    this.currentOffer.beach = null
    if (this.currentOffer.island) Collections.updateBeaches(this.currentOffer.island)
    else  Collections.beaches = []
  },
  addPrice() {
    this.currentOffer.prices.push({
      price: null,
      days: null
    })
  },
  removePrice(index) {
    this.currentOffer.prices.splice(index, 1)
  },
  saveOffer(newOffer) {
    let _msg = checkOffer(this.currentOffer)
    if (_msg !== 'OK') {
      ntf.error(_msg)
    } else {
      if (newOffer) {
        const reqUrl = '/garage/create_offer/'
        return axios.empty(reqUrl, this.currentOffer).then(res => {
          console.log(res)
          ntf.success('Оффер создан')
          res = mock.garageCurrentOffer(this.offers.length + 1)
        })
      } else {
        const reqUrl = '/garage/update_offer/'
        return axios.empty(reqUrl, this.currentOffer).then(res => {
          console.log(res)
          ntf.success('Оффер обновлён')
          res = mock.garageCurrentOffer(this.currentOffer.id)
        })
      }
    }
  }
}

function checkOffer(offer) {
  if (offer.images.length < 1) return 'Нет фото байка'
  if (!offer.bike) return 'Не выбран байк'
  if (!offer.volume) return 'Не указан объём двигателя'
  if (!offer.year) return 'Не указан год выпуска'
  if (!offer.deposit) return 'Не указан размер залога'
  if (!offer.color) return 'Не указан цвет'
  if (!offer.number) return 'Не указан номерной знак'
  let _daysPrev = 0
  let i = 0
  while (i < offer.prices.length) {
    if (offer.prices[i].days <= _daysPrev || !offer.prices[i].price)
      return 'Цены на байк указаны некорректно'
    _daysPrev = offer.prices[i].days
    i += 1
  }
  if (!offer.beach) return 'Не выбран пляж'
  return 'OK'
}
