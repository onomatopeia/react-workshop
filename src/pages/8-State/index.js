import React from 'react'
import Timer from './Timer'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Code from '../../components/Code'
import Example from '../../components/Example'
import MousePosition from './MousePosition'
import HelloYou from './HelloYou'

const Page = () => (
  <div>
    <PageTitle text="Stateful components" />

    <p>
      React components can have an internal state which is useful to maintain
      component-specific information during their lifecycle.
    </p>

    <p>
      The state can be set through <code>this.setState(…)</code> (<a
        href="https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly"
        target="_blank"
        rel="noopener noreferrer"
      >
        never modify it directly
      </a>). Then it can be read through <code>this.state</code> (containing an
      object). It should be initialised in the class constructor, and updated
      anywhere but in the <code>render</code> method (since updating the state
      cause a re-render).
    </p>

    <Code language="js">{`class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMounted: false
    }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  render() {
    return (
      <p>Mounted: {this.state.isMounted}</p>
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

    <SectionTitle text="Before jumping in" />

    <ul>
      <li>
        State should never be assigned manually; always use{' '}
        <code>setState</code>.
      </li>
      <li>
        A functional component (a component expressed as a function) cannot hold
        state; a proper <code>class</code> has to be used.
      </li>
      <li>Updating the state of the component will cause it to re-render.</li>
      <li>Setting the state is an asynchronous action.</li>
    </ul>

    <SectionTitle text="Exercise A - Initial second value (easy)" />

    <p>
      Tweak the <code>Timer</code> component so it accepts an initial{' '}
      <code>seconds</code> property to set the default value for seconds so it
      does not necessarily start at 0.
    </p>

    <Example live>
      <Timer seconds={42} />
    </Example>

    <SectionTitle text="Exercise B - Display your name (easy)" />

    <p>
      Add an event listener to the component in <code>HelloYou.js</code> so the
      input value (<code>event.target.value</code>) is stored in the state. Then
      render it in the paragraph following the input.
    </p>

    <Example live>
      <HelloYou />
    </Example>

    <SectionTitle text="Exercise C - Record mouse position (medium)" />

    <p>
      Display the live mouse position on the page. Get started with the code in{' '}
      <code>MousePosition.js</code>
    </p>

    <Example live>
      <MousePosition />
    </Example>
  </div>
)

export default Page
