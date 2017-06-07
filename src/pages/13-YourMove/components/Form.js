import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <div>
        <label htmlFor='message'>What do you want to send? (140)</label>
        <div>
          <textarea id='message'></textarea>
        </div>
        <button type='button'>Send</button>
      </div>
    )
  }
}

export default Form
