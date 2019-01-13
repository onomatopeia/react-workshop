import React from 'react'
import throttle from 'lodash.throttle'  
//https://lodash.com/docs/
// npm install lodash.throttle

class MousePosition extends React.Component {

  state = {}

  mouseMoveHandler = event => {
    this.setState({X: event.clientX, Y: event.clientY})
  }

  throttleMoveHandler = throttle(this.mouseMoveHandler, 100)

  componentDidMount() {
    window.addEventListener('mousemove', this.throttleMoveHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.throttleMoveHandler)
  }

  render() {
    return (
      // Adjust this to log the current mouse position on screen.
      // Hint: window.addEventListener('mousemove', …)
      // Hint: event.clientX, event.clientY
      <p>Mouse is currently at position {this.state.X}:{this.state.Y}.</p>
    )
  }
}

/*
  If we write
  func() {
    // here `this` is refering to the function func
    // but you have bind your functions in the contructor
  }

  func = () => {
    // here `this` is an instance
  }
*/

export default MousePosition

/*
const add = (a,b) => a+b
const sum = arr.reduce(add, 0)
const sum = arr.reduce((a,b) => a+b, 0)
const arrPlus2 = arr.map(item => item +2)
this.setState(prevState => ({foo: prevState.foo + 1}))
*/
