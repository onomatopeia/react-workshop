import React from 'react'
import Timer from './Timer'
import PageTitle from '../__internals/PageTitle'
import SectionTitle from '../__internals/SectionTitle'
import Code from '../__internals/Code'
import Example from '../__internals/Example'
import AskBeforeUnload from './AskBeforeUnload'
import MousePosition from './MousePosition'

const Page = () => (
  <div>
    <PageTitle text='Stateful components' />

    <p>
      React components can have an internal state which is useful to maintain
      component-specific information during a part of the entirety of their
      lifecycle.
    </p>

    <p>
      The state can be set through <code>this.setState(…)</code>. Then it can
      be read through <code>this.state</code> (containing an object). It can
      only be set once the component has “mounted”, that is, has been initially
      rendered (known with <code>componentDidMount</code> lifecycle event hook).
    </p>

    <Code language='js'>{`class MyComponent extends React.Component {
  componentDidMount () {
    this.setState({ mounted: true })
  }

  render () {
    return (
      <p>Mounted: {this.state.mounted}</p>
    )
  }
}`}</Code>

    <p>
      When pushing this a bit further, we can do wonders! Below is a component
      updating itself to display the number of seconds since it has been
      rendered.
    </p>

    <Example>
      <Timer />
    </Example>

    <SectionTitle text='Before jumping in' />

    <ul>
      <li>
        A functional component (a component expressed as a function) cannot
        hold state; a proper <code>class</code> has to be used.
      </li>
      <li>Updating the state of the component will cause it to re-render.</li>
      <li>Setting the state is an asynchronous action.</li>
    </ul>

    <SectionTitle text='Exercise A - Initial second value (easy)' />

    <p>
      Tweak the <code>Timer</code> component so it accepts an
      initial <code>seconds</code> property to set the default value for seconds
      so it does not necessarily start at 0.
    </p>

    <Example live>
      <Timer seconds={42} />
    </Example>

    <SectionTitle text='Exercise B - Ask Before Unload (medium)' />

    <p>
      Build a component that ask for confirmation before leaving the page. Find
      more information
      about <a href='https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload' target='_blank'>this Web API on MDN</a>.
      Get started with the code in <code>AskBeforeUnload/index.js</code>
    </p>

    <Example live>
      <AskBeforeUnload />
    </Example>

    <SectionTitle text='Exercise C - Mouse Position Recording (medium)' />

    <p>
      Display the live mouse position on the page.
      Get started with the code in <code>MousePosition/index.js</code>
    </p>

    <Example live>
      <MousePosition />
    </Example>

    <SectionTitle text='Exercise D - Integrate a 3rd party (hard)' />

    <p>
      [Hard] Find a simple third-party library and initialise it inside your
      component (e.g.: <a href='http://flickity.metafizzy.co/' target='_blank'>Flickity</a>, <a href='https://github.com/edenspiekermann/a11y-dialog' target='_blank'>a11y-dialog</a>…).
    </p>
  </div>
)

export default Page
