import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import MessageSender from './Container'

const store = createStore(reducer)

const MessageApp = () => (
  <Provider store={store}>
    <MessageSender />
  </Provider>
)

export default MessageApp
