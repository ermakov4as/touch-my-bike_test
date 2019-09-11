import axios from './axios'
import Filter from './Filter'
let COUNT = 0
export default {
  list: filter => {
    const requestRow = Filter.buildReqestRow(filter)
    return axios({
      method: 'get',
      url: `/shop/offers/${requestRow}`,
      data: {
        autorization: false
      }
    }).then(res => {
      COUNT = res.count
      return res.results
    })
  },
  total: () => COUNT,
  currentOffer: id => {
    return axios({
      method: 'get',
      url: `/shop/offers/${id}/`,
      data: {
        autorization: false
      }
    })
  },
  example
}

/**
|--------------------------------------------------
| SERVER FORMAT
|--------------------------------------------------
*/
// eslint-disable-next-line
function example() {
  return {
    id: 41,
    owner: {
      user: 'Мега Владелец',
      description: ''
    },
    bike_number: '388383',
    is_active: true,
    bike: {
      id: 6,
      brand: {
        id: 1,
        name: 'BMW'
      },
      name: 'F 850 GS',
      type: 'motorcycle'
    },
    production_year: 2323,
    abs: true,
    esp: true,
    volume: 222,
    automatic_transmission: true,
    color: 'red',
    deposit: 222,
    shipping: true,
    prices: [200, 150],
    days: [1, 7],
    date_added: '2019-08-14T21:56:27.999231Z',
    date_modified: '2019-08-14T23:30:29.953679Z',
    islands: [
      {
        id: 1,
        name: 'Phuket'
      }
    ],
    beaches: [
      {
        id: 2,
        name: 'Karon'
      }
    ],
    images: ['http://165.22.26.193:8000/media/images/123.jpg'],
    price: 200
  }
}
