import React from 'react'
import User from '../User'

const UserList = props => (
  <ul>
    {props.users.map(user => (
      // Don’t pay too much attention to the `key` prop just yet!
      // To know more about React keys:
      // https://reactjs.org/docs/lists-and-keys.html
      // https://reactjs.org/docs/reconciliation.html#keys
      
      // ...user = this is spreading the user object 
      <li key={user.email}>
        <User {...user} /> 
      </li>
    ))}
  </ul>
)

export default UserList
