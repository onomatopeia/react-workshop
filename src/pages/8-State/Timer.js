import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      seconds: (props.seconds || 0)
    }
    // setState would trigger render, so one shouldn't (even if can) use this method in a constructor
  }

  componentDidMount() {
    this.timer = setInterval(this.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  increment = () => {
    /*this.setState({
      seconds: this.state.seconds + 1
    })*/

    //below is an alternative implementation that is also correct (there was a discussion which is better, but I didn't get it)
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }))
  }

  pluraliseSeconds = () => {
    return this.state.seconds === 1 ? 'second' : 'seconds'
  }

  render() {
    return (
      <p>
        <span role="img" aria-label="hand waving">
          👋🏻
        </span>{' '}
        I have been rendered for {this.state.seconds} {this.pluraliseSeconds()}.
      </p>
    )
  }
}

export default Timer
