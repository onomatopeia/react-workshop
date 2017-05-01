import React from 'react'
import HelloWorld from './HelloWorld'
import Code from '../__internals/Code'

const Page = (props) => (
  <div>
    <HelloWorld />
    <p>This is the simplest React component example. To be fair, there is not so much things to see here… You can look at the code in <code>HelloWorld.js</code> and maybe play with it if you’d like!</p>

    <Code language='jsx'>{`import React from 'react'

const HelloWorld = () => <h1>Hello world</h1>

export default HelloWorld`}</Code>
  </div>
)

export default Page
