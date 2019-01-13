export const incrementCounter = (deltaValue, maxValue) => ({
  type: 'INCREMENT',
  delta: deltaValue, 
  limit: maxValue
})

export const decrementCounter = (deltaValue, minValue) => ({
  type: 'DECREMENT',
  delta: deltaValue, 
  limit: minValue
})

export const incrementCounter2 = (incrementValue, maxValue) => ({
  type: 'INCREMENT2',
  increment: incrementValue, 
  limit: maxValue
})

export const decrementCounter2 = (incrementValue, minValue) => ({
  type: 'DECREMENT2', 
  increment: incrementValue, 
  limit: minValue
})

export const resetCounter = () => ({
  type: 'RESET'
})

