import Bike from './Bike'
import Color from './Color'
import Island from './Island'
import Beach from './Beach'
import { ntf } from '@/services'

import axios from './axios'
import _ from 'lodash'

export default {
  create: offer =>
    axios.post('/garage/offers/', offerFormatToServer(offer)).catch(detail => {
      ntf.error(detail.msg)
      console.error(detail)
    }),
  list: () => axios.get('/garage/offers/').then(res => res.results),
  get: id => axios.get(`/garage/offers/${id}/`).then(offerFormatFromServer),
  update: offer =>
    axios.put(`/garage/offers/${offer.id}/`, offerFormatToServer(offer)),
  empty: empty,
  example: example
}

function offerFormatToServer(offer) {
  offer = { ...offer }
  offer.color = offer.color.value
  offer.production_year = offer.year
  delete offer.year
  offer.automatic_transmission = offer.akp
  delete offer.akp
  offer.islands = [offer.island]
  delete offer.island
  offer.beaches = [offer.beach]
  delete offer.beach
  offer.bike_number = offer.number
  delete offer.number
  offer.days = _.map(offer.prices, i => Number(i.days))
  offer.prices = _.map(offer.prices, i => Number(i.price))
  return offer
}

function offerFormatFromServer(offer) {
  let prices = []
  for (let i in offer.prices) {
    prices.push({
      price: offer.prices[i],
      days: offer.days[i]
    })
  }
  offer.prices = prices
  delete offer.days
  if (offer.islands.length) {
    offer.island = offer.islands[0]
    delete offer.islands
  }
  if (offer.beaches.length) {
    offer.beach = offer.beaches[0]
    delete offer.beaches
  }
  offer.number = offer.bike_number
  delete offer.bike_number
  offer.year = offer.production_year
  delete offer.production_year
  offer.akp = offer.automatic_transmission
  delete offer.automatic_transmission
  offer.color = Color.getByValue(offer.color)
  return offer
}

function empty() {
  return {
    images: [],
    bike: Bike.empty(),
    volume: null,
    year: null,
    abs: false,
    esp: false,
    akp: false,
    deposit: null,
    color: null,
    number: null,
    is_active: false,
    shipping: false,
    prices: [
      {
        days: 1,
        price: null
      }
    ],
    island: null,
    beach: null,
    description: null
  }
}

function example() {
  return {
    images: [
      {
        id: 133,
        url: 'http://165.22.26.193:8000/media/images/av2s_KkTlAAJ.JPG'
      },
      {
        id: 134,
        url: 'http://165.22.26.193:8000/media/images/ava_ewI3LLs.jpg'
      }
    ],
    bike: Bike.example(),
    volume: '130',
    year: '2011',
    abs: true,
    esp: false,
    akp: true,
    deposit: '120',
    color: Color.example(),
    number: 'WA303X',
    is_active: true,
    shipping: true,
    prices: [
      {
        days: 1,
        price: 190
      },
      {
        days: 7,
        price: 150
      },
      {
        days: 14,
        price: 90
      }
    ],
    island: Island.example(),
    beach: Beach.example(),
    description: 'Красивый, самый лучший байк!'
  }
}
