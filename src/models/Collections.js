import axios from './axios'
import { mock } from '@/services'

let years = []
for (let i = 2000; i < 2020; i++) years.push(i)

export default {
  brands: [],
  islands: [],
  colors: [],
  bikes: null,
  beaches: null,
  years: years,
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
