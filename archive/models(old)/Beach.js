import axios from './axios'

export default {
  list: island =>
    axios({
      method: 'get',
      url: `/geo/islands/${island.id}`,
      data: {
        autorization: false
      }
    }).then(res => res.beaches),
  example: () => ({
    id: 3,
    name: 'Kata'
  })
}
