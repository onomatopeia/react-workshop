import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducer'
import Counter from './Counter'

const store = createStore(counterReducer)

const CounterRedux = (props) => (
  <Provider store={store}>
    <Counter delta={props.delta || 1} deltas={props.deltas || [1]} min={props.min || -25} max={props.max || 25} />
  </Provider>
)

export default CounterRedux
