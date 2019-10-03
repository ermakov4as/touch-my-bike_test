import axios from './axios'
import { mock } from '@/services'
import Filter from './Filter'

const _ = require('lodash')
const moment = require('moment')
moment.locale('ru')

const RANGE = 365

let years = []
for (let i = 2000; i < 2020; i++) {
  years.push({
    value: i,
    name: i.toString()
  })
}

let akp_options = [
  {
    id: 1,
    name: 'Механика',
    value: false
  },
  {
    id: 2,
    name: 'Автомат',
    value: true
  }
]

function datediff(first, second) {
  return Math.abs(Math.round((second - first) / (1000 * 60 * 60 * 24)))
}

export default {
  brands: [],
  islands: [],
  colors: [],
  bikes: null,
  beaches: null,
  years,
  get dates_from() {
    let from = new Date()
    from.setHours(0, 0, 0, 0)
    from.setDate(from.getDate() - 1)
    let curDate = from
    let to = Filter.date_to && Filter.date_to.value
    if (!to) {
      to = new Date()
      to.setDate(from.getDate() + RANGE + 1)
    }
    return _.times(datediff(from, to), () => {
      curDate.setDate(curDate.getDate() + 1)
      return {
        id: curDate.getTime(), // Прсто для того, чтобы сохранить формат ItemCollection
        name: moment(curDate).format('D MMM YY'),
        value: new Date(curDate)
      }
    })
  },
  get dates_to() {
    let from = Filter.date_from ? new Date(Filter.date_from.value) : new Date()
    from.setHours(0, 0, 0, 0)
    from.setDate(from.getDate() - 1)
    let curDate = from
    let to = new Date(from)
    to.setDate(to.getDate() + RANGE + 1)
    return _.times(datediff(from, to), () => {
      curDate.setDate(curDate.getDate() + 1)
      return {
        id: curDate.getTime(),
        name: moment(curDate).format('D MMM YY'),
        value: new Date(curDate)
      }
    })
  },
  akp_options,
  init(mode = "baseInit") {
    axios.empty('GET: /brands').then(res => {
      console.log(res)
      this.brands = mock.brands()
    })
    axios.empty('GET: /islands').then(res => {
      console.log(res)
      this.islands = mock.islands()
    })
    if (mode === 'fullInit') {
      axios.empty('GET: /colors').then(res => {
        console.log(res)
        this.colors = mock.colors()
      })
    }
  },
  updateBeaches(island) {
    if (!island) {
      this.beaches = null
      return
    }
    axios.empty(`GET: /island/${island.id}/beaches`).then(res => {
      console.log(res)
      this.beaches = mock.beaches(island)
    })
  },
  updateBikes(brand) {
    if (!brand) {
      this.bikes = null
      return
    }
    axios.empty(`GET: /brand/${brand.id}/bikes`).then(res => {
      console.log(res)
      this.bikes = mock.bikes(brand)
    })
  }
}
