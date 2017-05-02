import React from 'react'
import UserList from './UserList'

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
