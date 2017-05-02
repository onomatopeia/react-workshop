import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>React is undefined</h1>

    <p>
      Welcome to this introduction to React! In the next few hours, we’ll see
      what is React, why would we use it over some over technologies, and how to
      get started with writing React components.
    </p>

    <h2>What is React?</h2>

    <p>
      TBA (not framework).
    </p>

    <h2>Why React?</h2>

    <p>
      TBA (declarative, rich ecosystem).
    </p>

    <h2>How does it work?</h2>

    <p>
      TBA (components, tree, diff…).
    </p>

    <h2>Components</h2>

    <p>
      Writing React components do not have to be scary. We will start with
      a <Link to='/HelloWorld'>“Hello World”</Link> which renders the most basic
      (and admittedly boring) component ever.
    </p>

    <p>
      From there, we can get introduced to the <Link to='/SimpleProps'>concept of “props”</Link>.
      We will go <Link to='/CompleteProps'>further with props</Link> until we are comfortable with them.
    </p>

    <h2>State & lifecycle</h2>

    <p>
      On top of props, React components can have internal state, making them
      <Link to='/State'>“stateful components”</Link>. This is deeply connected
      to their lifecycle.
    </p>

    <h2>Higher Order Components</h2>

    <p>
      A component based approach enables developer to create reusable blocks to
      build consistent and efficient user interfaces. When it comes to
      extracting logic, there is a concept
      called <Link to='/HigherOrder'>higher-order components</Link>.
    </p>

    <h2>Components & containers</h2>

    <p>
      To avoid having components doing too many things, and to separate the
      logic from the view, we use <Link to='/ManipulatingData'>“containers”</Link>.
      Containers are regular components dealing with the logic bits and the data
      transforming / sorting / filtering so the component underneath can focus
      on rendering the data and displaying it in a nice way.
    </p>

    <h2>EVERYTHING BELOW IS TO CLEAN.</h2>

    <h2>Use this knowledge to build something <em>(60 mins)</em></h2>

    <ul>
    <li>Simple index.html/CodePen, build a simple example, css block</li>
    <li>CRA</li>
    </ul>

    <p>--- break ---</p>

    <h2>Build systems</h2>

    <ul>
    <li>Webpack the basics</li>
    <li>Webpack the complicated</li>
    </ul>

    <h2>Isomorphism</h2>

    <ul>
    <li>Server setup (ReactDOMServer, JSX in Node)</li>
    <li>Caching?</li>
    </ul>

    <h2>Styling</h2>

    <ul>
    <li>CSS</li>
    <li>Modules?</li>
    <li>CSS in JS (Fela, styled-components)</li>
    </ul>

    <p>--- break ---</p>

    <h2>Bonus content</h2>

    <ul>
    <li>Flux based state management</li>
    <li>Router</li>
    <li>Refs and third parties</li>
    <li>Events (Keyboard Click Events)</li>
    <li>Context - when to use it, and when really not to use it</li>
    <li>Controlled components</li>
    <li>Prop/State Hoisting (Data flow bottom to top)</li>
    </ul>
  </div>
)
