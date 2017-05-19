import React from 'react'
import styles from './styles'
import { createComponent } from 'react-fela'
const StyledButton = createComponent(styles, 'button', ['type'])

const Button = (props) => (
  <StyledButton type='button'>
    {props.children}
  </StyledButton>
)

export default Button
