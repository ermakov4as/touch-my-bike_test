const COLORS = [
  {
    name: 'красный',
    value: 'red'
  },
  {
    name: 'синий',
    value: 'blue'
  },
  {
    name: 'зеленый',
    value: 'green'
  }
]

export default {
  list: () => COLORS,
  example: () => COLORS[Math.floor(Math.random() * COLORS.length)],
  getByValue: value => COLORS.find(i => i.value === value)
}
