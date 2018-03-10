import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: 0
    }
  }

  componentWillMount() {
    this.timer = setInterval(this.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  increment = () => {
    this.setState({
      seconds: this.state.seconds + 1
    })
  }

  pluraliseSeconds = () => {
    return this.state.seconds === 1 ? 'second' : 'seconds'
  }

  render() {
    return (
      <p>
        👋🏻 I have been rendered for {this.state.seconds}{' '}
        {this.pluraliseSeconds()}.
      </p>
    )
  }
}

export default Timer
