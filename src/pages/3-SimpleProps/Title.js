import React from 'react'

const Title = props => {
  // Two alternative implementations of if-else
  //const Level =  props.level ? "h" + props.level : "h1"
  const Level = "h" + props.level || "h1"
  return <Level id={props.id}>{props.text}123</Level>
}

export default Title
