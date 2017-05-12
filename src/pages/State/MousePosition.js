import React from 'react'

class MousePosition extends React.Component {
  render () {
    return (
      // Adjust this to log the current mouse position on screen.
      // Hint: window.addEventListener('mousemove', …)
      // Hint: event.clientX, event.clientY
      <p>Mouse is currently at position X:Y.</p>
    )
  }
}

export default MousePosition
