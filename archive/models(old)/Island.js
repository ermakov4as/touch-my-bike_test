import axios from './axios'

export default {
  list: () =>
    axios({
      method: 'get',
      url: '/geo/islands/',
      data: {
        autorization: false
      }
    }).then(res => res.results),
  example: () => ({
    id: 1,
    name: 'Phuket'
  })
}
