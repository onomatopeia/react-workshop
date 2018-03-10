import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

export default () => (
  <div>
    <PageTitle text="React is undefined" />

    <p>
      Welcome to this introduction to{' '}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>! In the next few hours, we’ll see what is React, why would we use it
      over some over technologies, and how to get started with writing React
      components.
    </p>

    <p>
      <strong>
        ✋ If you have any question at any moment, please be sure to ask! We are
        here to help.
      </strong>
    </p>

    <SectionTitle text="What is React?" />

    <p>
      React is a JavaScript library for building user interfaces. It differs
      from a framework in the way that it does not necessarily dictates ways to
      do things. It also does not ship with everything necessary to build a
      website or application. React essentially takes care of rendering the
      interface.
    </p>

    <SectionTitle text="Why React?" />

    <p>
      There are many reasons why you would pick React over some other library or
      framework. It could be the fact that it has a declarative syntax. There is
      very little magic going on. What you see is what you get. This makes it
      easy to pick up even for non-programmers; the learning curve is quite
      shallow.
    </p>

    <p>
      In React, almost everything is a component. This heavily componentized
      approach makes it the perfect candidate to build complex layouts with a
      lot of tiny reusable pieces.
    </p>

    <p>
      One of the benefits of embracing React is also its very rich ecosystem of
      components and plugins. Many companies have implemented React in their
      tech stack and open-source their components for broader use.
    </p>

    <p>
      Another great aspect of React is that it becomes quite universal. Because
      of its efficiently tiny core, its main principle of reconcilation of
      virtual DOM trees (see below) can be reused and implemented almost
      anywhere. React exists on the web, but also on the native layer, in game
      engines, in Sketch, in augmented reality…
    </p>

    <SectionTitle text="How does it work?" />

    <p>
      React abstracts the <abbr title="Document Object Model">DOM</abbr> away.
      It operates over a “virtual DOM”. Whenever one of your components gets
      rendered, it doesn’t get written into the HTML document just yet. It gets
      rendered inside a virtual representation of the DOM. Eventually, React
      will convert that representation into actual HTML. While it might sound
      unnecessarily complex, this is how React can offer such a simple and
      straight-forward declarative API.
    </p>

    <p>
      Now when it comes to know *what* to render, React does a “reconciliation”.
      This is the process in which React compares two virtual DOM trees to
      figure out what has changed and what needs to be refreshed. You can read{' '}
      <a
        href="https://facebook.github.io/react/docs/reconciliation.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        about the reconciliation process
      </a>{' '}
      more in details in the official documentation.
    </p>

    <SectionTitle text="Components" />

    <p>
      Writing React components do not have to be scary. We will start with a{' '}
      <Link to="/HelloWorld">“Hello World”</Link> which renders the most basic
      (and admittedly boring) component ever.
    </p>

    <p>
      From there, we can get introduced to the{' '}
      <Link to="/SimpleProps">concept of “props”</Link>. We will go{' '}
      <Link to="/CompleteProps">further with props</Link> until we are
      comfortable with them. Components configured with props being no different
      than functions configured with parameters, we should be able to quickly
      move to the interesting bits!
    </p>

    <SectionTitle text="Lifecycle" />

    <p>
      Every React component has some sort of{' '}
      <Link to="/Lifecycle">lifecycle</Link>. It is possible to hook things onto
      these lifecycle events in order to react to certain moments in time (when
      the component gets mounted, unmounted, updated with new props…).
    </p>

    <SectionTitle text="State" />

    <p>
      On top of props, React components can have internal state, making them{' '}
      <Link to="/State">“stateful components”</Link>. This is deeply connected
      to their lifecycle. This is also what makes it possible to write dynamic
      applications maintaining (local and/or global) states. In other words,
      this is where the fun begins!
    </p>

    <SectionTitle text="Higher Order Components" />

    <p>
      A component based approach enables developer to create reusable blocks to
      build consistent and efficient user interfaces. When it comes to
      extracting logic, there is a concept called{' '}
      <Link to="/HigherOrder">higher-order components</Link>. We’ll see how to
      write a higher-order function and how to use it.
    </p>

    <SectionTitle text="Components & containers" />

    <p>
      To avoid having components doing too many things, and to separate the
      logic from the view, we use{' '}
      <Link to="/ManipulatingData">“containers”</Link>. Containers are regular
      components dealing with the logic bits and the data transforming / sorting
      / filtering so the component underneath can focus on rendering the data
      and displaying it in a nice way.
    </p>

    <SectionTitle text="Styling" />

    <p>
      Styling in React apps can be done in many ways, from basic CSS in a
      separate stylesheet to LESS/Sass and other preprocessors, up until
      CSS-in-JS solutions! In this section we’ll experiment with of these
      JavaScript-powered styling implementations and practice with authoring
      dynamic styles based on components props.
    </p>
  </div>
)
