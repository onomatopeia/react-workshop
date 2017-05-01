import React from 'react'

const ViewportWidthProvider = (WrappedComponent) => {
  class ViewportWidth extends React.Component {
    render () {
      return (
        // Replace `viewportWidth` prop value with the actual viewportWidth
        <WrappedComponent {...this.props} viewportWidth={undefined} />
      )
    }
  }

  return ViewportWidth
}


export default ViewportWidthProvider
