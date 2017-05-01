import React from 'react'
import Trackable from './trackable'

const Page = (props) => (
  <div onClick={props.onClick}>
    <h2>Tasks (15 minutes):</h2>
    <p>Write a higher-order function that provides the viewport width to the wrapped component as a <code>viewportWidth</code> property. Do not forget to unregister the listeners when/if component unmounts!</p>
  </div>
)

export default Trackable(Page)
