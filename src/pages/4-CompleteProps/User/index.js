import React from 'react'
import PropTypes from 'prop-types'

const User = props => (
  <span>
    {props.preferredName || props.name}:{' '}
    <a href={`mailto:${props.email}`}>{props.email}</a>
  </span>
)

// https://reactjs.org/docs/typechecking-with-proptypes.html
User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  preferredName: PropTypes.string
}

export default User
