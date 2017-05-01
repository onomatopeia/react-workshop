import React from 'react'

const ViewportWidthProvider = (Component) => {
  class ViewportWidth extends React.Component {
    render () {
      return (
        // Replace `viewportWidth` prop value with the actual viewportWidth
        <Component {...this.props} viewportWidth={undefined} />
      )
    }
  }
}


export default ViewportWidthProvider
