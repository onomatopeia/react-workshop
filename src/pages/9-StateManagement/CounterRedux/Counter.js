import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './actions'

const Counter = props => (
  <div>
    <div>{props.count}</div>
    <button onClick={props.incrementCounter}>+</button>
    <button onClick={props.decrementCounter}>-</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
