import React from 'react'
import PropTypes from 'prop-types'

const User = (props) => (
  <p>
    {props.preferredName || props.name}: <a href={`mailto:${props.email}`}>{props.email}</a>
  </p>
)

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  preferredName: PropTypes.string
}

export default User
