import React from 'react'

/*
This was one approach but it's not what I wanted.

const Href = props => <a href={props.children}>{props.children}</a>

const Title = props => <h1><Href>{props.children}</Href></h1>
*/

const Title = props => <h1>{props.children}</h1>

export default Title
