import React from 'react'
import Title from './Title'
import Code from '../__internals/Code'

const Page = (props) => (
  <div>
    <Title text='Component with simple props' />

    <p>A React component can be seen as a function that accepts “props” (really just a fancy name for “data”) and that outpus some markup in the form of JSX (which is an optional abstraction on top of React internal API).</p>

    <Code>{`import React from 'react'

const Title = (props) => <h1>{props.text}</h1>

export default Title`}</Code>

    <p>The title of this page is a component <code>Title</code> accepting a prop <code>text</code>. You can find the component definition in <code>Title.js</code>.</p>

    <Code>{`<Title text='Component with simple props' />`}</Code>
  </div>
)

export default Page
