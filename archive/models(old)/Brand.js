import axios from './axios'

export default {
  list: () =>
    axios({
      method: 'get',
      url: '/bikes/brands/?page_size=99999',
      data: {
        autorization: false
      }
    }).then(res => res.results),
  example: () => EXAPLES[Math.floor(Math.random() * EXAPLES.length)]
}

const EXAPLES = [
  {
    id: 1,
    name: 'BMW'
  },
  {
    id: 2,
    name: 'Ducati'
  },
  {
    id: 3,
    name: 'Harley-Davidson'
  },
  {
    id: 4,
    name: 'Honda '
  },
  {
    id: 5,
    name: 'Husqvarna'
  },
  {
    id: 6,
    name: 'Indian'
  },
  {
    id: 7,
    name: 'Kawasaki'
  },
  {
    id: 8,
    name: 'KTM'
  },
  {
    id: 9,
    name: 'Royal Enfield'
  },
  {
    id: 10,
    name: 'Suzuki'
  },
  {
    id: 11,
    name: 'Yamaha'
  },
  {
    id: 12,
    name: 'Honda'
  },
  {
    id: 13,
    name: 'Piaggio'
  },
  {
    id: 14,
    name: 'Vespa'
  }
]
