import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducer'
import Counter from './Counter'

const store = createStore(counterReducer)

const CounterRedux = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default CounterRedux
