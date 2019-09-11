import { ntf } from '@/services'
import { ClientOffer } from '@/models'
import axios from './axios'

export default {
  list: () => axios.get('/shop/orders/').then(res => res.results), // TODO: не нужны ли count, next, previous?
  create: order =>
    axios
      .post('/shop/offers/2/book/', orderFormatToServer(order))
      //      .then(res => { return res })
      .catch(detail => {
        ntf.error(detail.msg)
        console.error(detail)
      }),
  changeStatus: order =>
    axios
      .put(`/shop/orders/${order.id}/`, orderFormatToServer(order))
      //      .then(res => { return res })
      .catch(detail => {
        ntf.error(detail.msg)
        console.error(detail)
      }),
  empty,
  example
}

function empty() {
  // TODO: не нужно ли поле client с указанием инфы того, кто заказывает?
  return {
    offer: null,
    date: null,
    state: null, // TODO: booked, confirmed, done, canceled
    delivery: null,
    price: null,
    start_date: null,
    end_date: null
  }
}

function example() {
  return {
    offer: ClientOffer.example(),
    date: '2019-08-21',
    status: 'booked',
    delivery: 'Phuket, hotel Grand Empire',
    price: 400,
    start_date: '2026-09-25',
    end_date: '2026-10-28'
  }
}

function orderFormatToServer(order) {
  order = { ...order }
  order.offer = order.offer.id
  return order
}
