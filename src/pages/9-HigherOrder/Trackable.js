import React from 'react'

const Trackable = (WrappedComponent) => {
  class TrackableComponent extends React.Component {
    componentDidMount () {
      console.log(`Component ${WrappedComponent.name} mounted.`)
    }

    componentWillUnmount () {
      console.log(`Component ${WrappedComponent.name} will unmount.`)
    }

    handleClick = (event) => {
      console.log(`Component ${WrappedComponent.name} clicked.`)

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(event)
      }
    }

    render () {
      return (
        <WrappedComponent
          {...this.props}
          onClick={this.handleClick}
        />
      )
    }
  }

  return TrackableComponent
}

export default Trackable
