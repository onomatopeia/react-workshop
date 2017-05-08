export const incrementCounter = (amount = 1) => ({
  type: 'INCREMENT',
  value: amount
})

export const decrementCounter = (amount = 1) => ({
  type: 'DECREMENT',
  value: amount
})
