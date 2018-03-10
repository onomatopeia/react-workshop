import React from 'react'
import PropTypes from 'prop-types'
import User from '../User'

const UserList = props => (
  <ul>
    {props.users.map(user => (
      // To know more about React keys
      // https://reactjs.org/docs/lists-and-keys.html
      // https://reactjs.org/docs/reconciliation.html#keys
      <li key={user.email}>
        <User {...user} />
      </li>
    ))}
  </ul>
)

// https://reactjs.org/docs/typechecking-with-proptypes.html
UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList
