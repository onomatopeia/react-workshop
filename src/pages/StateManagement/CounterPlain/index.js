import React from 'react'

const increment = (state) => ({ count: state.count + 1 })
const decrement = (state) => ({ count: state.count - 1 })

class CounterPlain extends React.Component {
  state = { count: 0 }

  render () {
    return (
      <div>
        <div>{this.state.count}</div>
        <button type='button' onClick={() => this.setState(increment)}>+</button>
        <button type='button' onClick={() => this.setState(decrement)}>-</button>
      </div>
    )
  }
}

export default CounterPlain
