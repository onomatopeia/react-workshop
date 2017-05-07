import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Button = (props) => (
  <button className={props.classes.button} type='button'>
    {props.children}
  </button>
)

export default injectSheet(styles)(Button)
