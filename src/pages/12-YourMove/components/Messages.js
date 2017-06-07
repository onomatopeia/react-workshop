import React from 'react'

const Messages = (props) => (
  <div>
    {props.messages.map(message => <p>{message}</p>)}
  </div>
)

export default Messages
