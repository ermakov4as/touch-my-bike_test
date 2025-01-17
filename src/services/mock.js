import Vue from 'vue'
import { PAGE_SIZE } from '@/config'

export default {
  email: () => Vue.faker().internet.email(),
  avatar: () => Vue.faker().image.avatar(),
  user: () => {
    return{
      firstName: 'James',
      lastName: 'Bond',
      phone: '+10009991122'
    }
  },
  islands: () => [
    {
      id: 1,
      name: 'Phuket'
    },
    {
      id: 2,
      name: 'Tekuhp'
    }
  ],
  beaches: island => {
    if (island.id == 1)
      return [
        {
          id: 1,
          name: 'Kata beach'
        },
        {
          id: 2,
          name: 'Sana ba'
        },
        {
          id: 3,
          name: 'Sana ba bi4'
        }
      ]
    else
      return [
        {
          id: 4,
          name: 'San Jose'
        },
        {
          id: 5,
          name: 'Bonna Vista'
        },
        {
          id: 6,
          name: 'San Mateo'
        }
      ]
  },
  brands: () => [
    {
      id: 1,
      name: 'BMW'
    },
    {
      id: 2,
      name: 'Honda'
    }
  ],
  bikes: brand => {
    if (brand.id == 1)
      return [
        {
          id: 1,
          name: 'HX-1504'
        },
        {
          id: 2,
          name: 'HX-1504 V1'
        },
        {
          id: 3,
          name: 'HX-1 V1 Длинное название'
        }
      ]
    else
      return [
        {
          id: 4,
          name: 'Q1-flex'
        },
        {
          id: 5,
          name: 'has gone V34'
        }
      ]
  },
  colors: () => [
    { 
      id: 1, 
      name: 'Красный' 
    },
    { 
      id: 2, 
      name: 'Синий' 
    },
    {
      id: 3,
      name: 'Зелёный',
    }
  ],
  shopOffers: () => {
    return {
      list: exampleList(),
      count: Math.floor(Math.random() * 100) + 100
    }
  },
  garageOffers: () => {
    return {
      list: exampleList(),
      count: Math.floor(Math.random() * 100) + 100
    }
  },
  garageCurrentOffer: (id) => {
    let _currentOffer = example('garageOffers')
    _currentOffer.id = id
    return _currentOffer
  },
  emptyOffer: () => {
    return newOffer()
  },
  emptyOrder: () => {
    return newOrder()
  },
  newImage: (imagesLength) => {
    return {
      id: imagesLength + 1,
      url: Vue.faker().image.transport()
    }
  }
}

function exampleList(mode) {
  let arr = []
  for (let i = 0; i < PAGE_SIZE; i++) arr.push(example(mode))
  return arr
}

let _id = 1
function example() {
  return {
    id: _id++,
    images: [
      {
        id: 1,
        url: Vue.faker().image.transport()
      },
      {
        id: 2,
        url: Vue.faker().image.sports()
      },
      {
        id: 3,
        url: Vue.faker().image.technics()
      },
      {
        id: 4,
        url: Vue.faker().image.city()
      },
      {
        id: 5,
        url: Vue.faker().image.nightlife()
      }
    ],
    brand: { id: 1, name: 'BMW' },
    bike: [
      {
        id: 1,
        name: 'HX-1504'
      },
      {
        id: 2,
        name: 'HX-1504 V1'
      },
    ][Math.floor(Math.random() * 10) % 2],
    volume: Math.floor(Math.random() * 10) * 10 + 300,
    year: 2010 + Math.floor(Math.random() * 10),
    abs: !!(Math.floor(Math.random() * 10) % 2),
    esp: !!(Math.floor(Math.random() * 10) % 2),
    akp: [
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
    ][Math.floor(Math.random() * 10) % 2],
    deposit: Math.floor(Math.random() * 10) * 10 + 100,
    color: [
      { 
        id: 1, 
        name: 'Красный'
      },
      { 
        id: 2, 
        name: 'Синий' 
      }
    ][Math.floor(Math.random() * 10) % 2],
    number: 'WA303X',
    is_active: true,
    is_favorite: false,
    shipping: !!(Math.floor(Math.random() * 10) % 2),
    prices: [
      {
        days: 1,
        price: 190
      },
      {
        days: 5,
        price: 170
      },
      {
        days: 12,
        price: 150
      },
      {
        days: 16,
        price: 120
      },
      {
        days: 20,
        price: 90
      }
    ].slice(0, Math.floor(Math.random() * 10) % 5 + 1),
    island: [ 
      {
        id: 1,
        name: 'Phuket'
      },
      {
        id: 2,
        name: 'Tekuhp'
      }
    ][Math.floor(Math.random() * 10) % 2],
    beach: [
      {
        id: 1,
        name: 'Kata beach'
      },
      {
        id: 2,
        name: 'Sana ba'
      },
      {
        id: 3,
        name: 'Sana ba bi4'
      }
    ][Math.floor(Math.random() * 10) % 3],
    description: Vue.faker().lorem.paragraph(),
    owner: [
      {    
        id: 1,
        name: 'Alex',
        phone: '+7 (111) 123-45-67' 
      },
      {    
        id: 2,
        name: 'Sergey',
        phone: '+1 (000) 000-00-00' 
      },
      {    
        id: 3,
        name: 'John',
        phone: '+3 (222) 999-99-99'
      }
    ][Math.floor(Math.random() * 10) % 3]
  }
}

function newOffer() {
  return {
    images: [],
    brand: null,
    bike: null,
    volume: null,
    year: null,
    abs: false,
    esp: false,
    akp: false,
    deposit: null,
    color: null,
    number: null,
    is_active: false,
    is_favorite: false,
    shipping: false,
    prices: [
      {
        price: null,
        days: null
      }
    ],
    island: null,
    beach: null,
    description: null,
    owner: {    
      id: null,
      name: null, 
      photo: null,   
      address: null,     
      email: null,   
      phone: null
    }
  }
}

function newOrder() {
  return {
    offer: null,
    date_from: null,
    date_to: null,
    need_shipping: false,
    adress: null
  }
}
