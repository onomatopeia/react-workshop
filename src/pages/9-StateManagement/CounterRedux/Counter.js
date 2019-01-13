import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter, resetCounter, incrementCounter2, decrementCounter2 } from './actions'


const Counter = props => (

  <div>
    <div>{props.count}</div>
    <div>Deltas: 
    {props.deltas.map((delta, i) => {
      return (
        <span>
          <button onClick={() => props.incrementCounter(delta, props.max)}>+{delta}</button>
          <button onClick={() => props.decrementCounter(delta, props.min)}>-{delta}</button>
        </span>
      )
    })}
    </div>
    <div>
      Increment: <input type="text" id="hello-you" value={props.increment}/>
      <button onClick={() => props.incrementCounter2(props.increment, props.max)}>+{props.increment}</button>
      <button onClick={() => props.decrementCounter2(props.increment, props.min)}>-{props.increment}</button>
    </div>
    <button onClick={props.reset}>Reset</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.count,
  increment: state.increment
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: (delta, max) => dispatch(incrementCounter(delta, max)),
  decrementCounter: (delta, min) => dispatch(decrementCounter(delta, min)),
  incrementCounter2: (increment, max) => dispatch(incrementCounter2(increment, max)),
  decrementCounter2: (increment, min) => dispatch(decrementCounter2(increment, min)),
  reset: () => dispatch(resetCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
