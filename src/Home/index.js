import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>React is undefined</h1>

    <h2>What is it, how does it work, what’s the point? <em>(30 mins)</em></h2>

    <ul>
    <li>
      <p>Why choose React, what does it help with?</p>

      <ul>
        <li>Declarative</li>
        <li>Library, not a framework</li>
        <li>Rich third-party ecosystem</li>
      </ul>
    </li>
    <li>
      <p>Reverse-tree based architecture</p>

      <ul>
        <li>Root component</li>
        <li>Sub-components…</li>
      </ul>
    </li>
    <li>
      <p>Component based approach with props</p>
      <ul>
        <li>
          <Link to='/HelloWorld'>Hello World (without props)</Link>
        </li>
        <li>
          <Link to='/SimpleProps'>Hello World (with props)</Link>
        </li>
        <li>
          <Link to='/CompleteProps'>Moar props</Link>
        </li>
      </ul>
    </li>
    <li>
      <p>React component lifecycle</p>
      <ul>
        <li>
          <Link to='/State'>Stateful component</Link>
        </li>
      </ul>
    </li>
    <li>
      <p>Higher Order Components</p>
      <ul>
        <li>
          <Link to='/HigherOrder'>Higher-order components</Link>
        </li>
      </ul>
    </li>
    <li><p>Component state - container</p>

    <ul>
    <li>https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0</li>
    <li>More complex example, text filter component</li>
    </ul></li>
    </ul>

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
