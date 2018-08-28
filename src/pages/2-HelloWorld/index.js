import React from 'react'
import HelloWorld from './HelloWorld'
import Code from '../../components/Code'

const Page = props => (
  <div>
    <HelloWorld />

    <p>
      A React component —in its simplest form— is a function that outputs
      markup. This is awfully simplistic but hopefully that describes simply
      enough how React works as a “rendering system”.
    </p>

    <Code language="js">{`import React from 'react'

const HelloWorld = () => {
  const tag = 'h1'
  const props = {}
  const content = 'Hello world'

  return React.createElement(tag, props, content)
}

export default HelloWorld`}</Code>

    <p>
      This syntax is pretty verbose! This is why React is often used with JSX.
    </p>

    <p>
      JSX is an abstraction on top of React internal API (namely{' '}
      <code>React.createElement</code>) and while not mandatory at all, makes
      authoring components much nicer. You can learn more{' '}
      <a
        href="https://reactjs.org/docs/jsx-in-depth.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        about JSX in React’s docs
      </a>
      .
    </p>

    <Code language="jsx">
      {`import React from 'react'

const HelloWorld = () => <h1>Hello world</h1>

export default HelloWorld`}
    </Code>

    <p>
      You can look at the code in <code>HelloWorld.js</code> and maybe play with
      it if you’d like!
    </p>

    <p>
      <em>
        Note that a compilation step is necessary to use JSX as this is not
        something browsers understand out of the box. Fortunatenaly, this is
        done as part of <code>create-react-app</code> which this project uses.
      </em>
    </p>
  </div>
)

export default Page
