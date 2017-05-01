import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = (props) => (
  <ul>
    {props.users.map((user) => (
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
