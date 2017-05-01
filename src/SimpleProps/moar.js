import React from 'react'
import PropTypes 'prop-types'

const User = (props) => (
  <p>
    {props.preferredName || props.name}: <a href=`mailto:${props.email}`>{props.email}</a>
  </p>
)

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  preferredName: Proptypes.string
}

const UserList = (props) => (
  <ul>
    {props.users.map((user) => (
      <li>
        <User {...user} />
      </li>
    ))}
  </ul>
)

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

const users = [
  { name: 'Michael', preferredName: 'Mike', email: 'mike@mikesmart.co.uk' },
  { name: 'Hugo', email: 'hugo.giraudel@gmail.com' }
]

const UserIndex = () => (
  <div>
    <h2>Users:</h2>
    <UserList users={users} />
  </div>
)

export default UserIndex
