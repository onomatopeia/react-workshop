import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Code from '../../components/Code'
import Example from '../../components/Example'
import Trackable from './Trackable'
import ViewportWidth from './ViewportWidth'

const ViewportWidthDisplay = ViewportWidth((props) => (
  <p>The viewport is {props.viewportWidth || 0} pixels wide.</p>
))

const Page = (props) => (
  <div onClick={props.onClick}>
    <PageTitle text='Higher-order components' />

    <p>
      Higher-order components (sometimes higher-order functions) are functions
      which return a React component while enhancing its capabilities. They are
      often used as a way to factorise code and avoid repetitions.
    </p>

    <p>
      Here is a higher-order component (HOC) in its smallest form (doing nothing
      specific here, really):
    </p>

    <Code language='jsx'>{`const SomethingSomething = (WrappedComponent) => {
  return (props) => (
    return <WrappedComponent {...props} />
  )
}`}</Code>

    <p>
      In this folder, we provided a <code>Trackable</code> component that logs
      things in the browser console (where an actual tracker would record
      user behaviour). This very page is wrapped by
      the <code>Trackable</code> componentn. Open your console and try clicking
      around to see it.
    </p>

    <SectionTitle text='Exercise — Higher-order component for viewport width' />

    <p>
      Write a higher-order function that provides the viewport width to the
      wrapped component as a <code>viewportWidth</code> property. Do not forget
      to unregister the listeners when/if component unmounts!
      Help yourself with the <code>Trackable</code> component if you need.
    </p>

    <Example live>
      <ViewportWidthDisplay />
    </Example>

    <p>
      When you’re done, make sure it reacts to viewport width’ changes as well!
    </p>
  </div>
)

export default Trackable(Page)
