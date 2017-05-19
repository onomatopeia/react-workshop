import React from 'react'
import './styles.css'

const Button = (props) => (
  <button type='button' className='button'>
    {props.children}
  </button>
)

export default Button
