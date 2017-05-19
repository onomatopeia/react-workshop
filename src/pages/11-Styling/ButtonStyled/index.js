import styled from 'styled-components'
import React from 'react'
import styles from './styles'
const StyledButton = styled.button`${styles}`

const StyledButtonStyled = (props) => (
  <StyledButton type='button'>
    {props.children}
  </StyledButton>
)

export default StyledButtonStyled
