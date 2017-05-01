import React from 'react'
import './styles.css'

const Code = (props) => (
  <pre className='Pre'>
    <code className='Code'>{props.children}</code>
  </pre>
)

export default Code
