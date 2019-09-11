const SEQ = [
  {
    name: 'Новые предложения',
    value: '-date_added'
  },
  {
    name: 'Сначала дорогие',
    value: '-price'
  },
  {
    name: 'Сначала дешевые',
    value: 'price'
  }
]

export default {
  list: () => SEQ,
  example: () => SEQ[Math.floor(Math.random() * SEQ.length)],
  getByValue: value => SEQ.find(i => i.value === value)
}
