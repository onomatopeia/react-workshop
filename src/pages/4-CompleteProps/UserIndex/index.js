import React from 'react'
import UserList from '../UserList'

const users = [
  {
    name: 'Jevgenija',
    preferredName: 'Zhenya',
    email: 'jevgenija.zigisova@n26.com'
  },
  { name: 'Michael', preferredName: 'Mike', email: 'mike.smart@n26.com' },
  { name: 'Hugo', email: 'hugo.giraudel@n26.com' }
]

const UserIndex = () => (
  <div>
    <h2>Users:</h2>
    <UserList users={users} />
  </div>
)

export default UserIndex
