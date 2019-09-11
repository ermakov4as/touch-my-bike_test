import axios from './axios'

export default {
  list: bike =>
    axios({
      method: 'get',
      url: `/bikes/models/?brand=${bike.id}&page_size=99999`,
      data: {
        autorization: false
      }
    }).then(res => res.results),
  empty: () => ({
    id: null,
    brand: null,
    name: null,
    type: null
  }),
  example: () => ({
    id: 2,
    brand: {
      id: 1,
      name: 'BMW'
    },
    name: 'C EVOLUTION',
    type: 'electric_scooter'
  })
}
