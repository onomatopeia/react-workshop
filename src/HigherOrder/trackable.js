import React from 'react'

const Trackable = (Component) => {
  class TrackableComponent extends React.Component {
    componentDidMount () {
      console.log(`Component ${Component.name} mounted.`)
    }

    componentWillUnmount () {
      console.log(`Component ${Component.name} will unmount.`)
    }

    handleClick = (event) => {
      console.log(`Component ${Component.name} clicked.`)

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(event)
      }
    }

    render () {
      return (
        <Component
          {...this.props}
          onClick={this.handleClick}
        />
      )
    }
  }

  return TrackableComponent
}

export default Trackable
