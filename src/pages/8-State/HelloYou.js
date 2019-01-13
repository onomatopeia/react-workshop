import React from 'react'

class HelloYou extends React.Component {
  // The state can also be initialised like this when it doesn’t require the
  // props.
  state = {}

  handleChange = event => {
    this.setState({name: event.target.value})
    // @TODO: save the input value (`event.target.value`) into the state
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="hello-you">What’s your name?</label>
        </div>
        <input type="text" id="hello-you" onChange={this.handleChange}/>
        <p>Hello {(this.state.name || 'World')}.</p>
      </div>
    )
  }
}

export default HelloYou
