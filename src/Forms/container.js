import React from 'react'
import PropTypes from 'prop-types'
import UserList from '../CompleteProps/UserList'

class Search extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string
  }

  getFilteredUsers = () => {
    if (!this.props.search) {
      return this.props.users
    }

    return this.props.users
      .filter(this.isUserMatching)
      .sort(this.sortUsers)
  }

  isUserMatching = (user) => {
    return user.name.toLowerCase().indexOf(this.props.search.toLowerCase()) > -1
  }

  sortUsers = (a, b) => {
    const { name: nameA } = a
    const { name: nameB } = b
    const { search } = this.props

    return nameA.indexOf(search) > nameB.indexOf(search) ? 1 : -1
  }

  render () {
    return (
      <UserList users={this.getFilteredUsers()} />
    )
  }
}

export default Search
