import React from 'react'
import PropTypes from 'prop-types'
import User from '../User'

const UserList = (props) => (
  <ul>
    {props.users.map((user) => (
      // To know more about React keys
      // https://facebook.github.io/react/docs/lists-and-keys.html
      // https://facebook.github.io/react/docs/reconciliation.html#keys
      <li key={user.email}>
        <User {...user} />
      </li>
    ))}
  </ul>
)

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList
