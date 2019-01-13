import React from 'react'

class Logger extends React.Component {
  
  componentDidMount () {
    console.log('Something')
    /*if (window.Prism) {
      window.Prism.highlightElement(this.codeNode)
    }*/
  }

  render() {
    return (
      <p>
        <span role="img" aria-label="megaphone">
          🔊
        </span>{' '}
        I should have logged something in the console!
      </p>
    )
  }
}

export default Logger
