import React from 'react'
import './styles.css'

const Page = props => (
  <div className="Page">
    <div className="Container">{props.children}</div>
  </div>
)

export default Page
