import React from 'react'

class HelloYou extends React.Component {
  // By default, the state is `null`
  state = {

  }

  handleChange = (event) => {
    // @TODO: save the input value (`event.target.value`) into the state
  }

  render () {
    return (
      <div>
        <div>
          <label htmlFor='hello-you'>What’s your name?</label>
        </div>
        <input type='text' id='hello-you' />
        <p>Replace me with “Hello &lt;input value&gt;”.</p>
      </div>
    )
  }
}

export default HelloYou
