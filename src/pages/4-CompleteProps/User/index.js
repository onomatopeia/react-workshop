import React from 'react'

const User = props => (
  <span>
    {props.preferredName || props.name}:{' '}
    <a href={`mailto:${props.email}`}>{props.email}</a>
  </span>
)

export default User
