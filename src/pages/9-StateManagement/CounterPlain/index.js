import React from 'react'

const increment = state => ({ count: state.count + state.delta })
const decrement = state => ({ count: state.count - state.delta })

class CounterPlain extends React.Component {
  
  state = { count: 0 }

  constructor (props) {
    super(props)
    this.state.delta = (props.delta || 1)
  } 
  

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button type="button" onClick={() => this.setState(increment)}>
          +
        </button>
        <button type="button" onClick={() => this.setState(decrement)}>
          -
        </button>
      </div>
    )
  }
}

export default CounterPlain
