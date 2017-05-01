import React from 'react'
import './styles.css'

const Example = (props) => (
  <div className='Example'>
    {props.live && <span className='Live'>Live Coding Area</span>}
    {props.children}
  </div>
)

export default Example
