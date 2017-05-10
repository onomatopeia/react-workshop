import React from 'react'
import Messages from './Messages'
import Form from './Form'

class MessageSender extends React.Component {
  render () {
    return (
      <div>
        <Messages {...this.props} />
        <Form {...this.props} />
      </div>
    )
  }
}

export default MessageSender
