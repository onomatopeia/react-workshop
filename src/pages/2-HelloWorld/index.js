import React from 'react'
import HelloWorld from './HelloWorld'
import Code from '../../components/Code'

const Page = (props) => (
  <div>
    <HelloWorld />

    <p>
      A React component —in its simplest form— is a function that outputs
      markup. This is awfully simplistic but hopefully that describes simply
      enough how React works as a “rendering system”.
    </p>

    <Code language='jsx'>{`import React from 'react'

const HelloWorld = () => <h1>Hello world</h1>

export default HelloWorld`}</Code>

    <p>
      JSX is an abstraction on top of React internal API (namely <code>
      React.createElement</code>) and while not mandatory at all,
      makes authoring components much nicer. You can learn more <a href='https://facebook.github.io/react/docs/jsx-in-depth.html' target='_blank'>
      about JSX in React’s docs</a>.
    </p>

    <p>
      You can look at the code in <code>HelloWorld.js</code> and maybe play with
      it if you’d like!
    </p>

  </div>
)

export default Page
