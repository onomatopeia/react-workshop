import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Code from '../../components/Code'
import Example from '../../components/Example'
import InputKeyLogger from './InputKeyLogger'

const Page = (props) => (
  <div>
    <PageTitle text='Events' />

    <p>
      React has a specific way to handle events. You should not bind event
      listeners on your DOM elements. Remember that you are dealing with a
      virtual DOM representation.
    </p>

    <p>
      You can pass functions as <code>on*</code> props to React components (such
      as <code>onClick</code>) so they get automatically called when these
      events are being fired. Careful: case matters!
    </p>

    <Code language='jsx'>{`<button onClick={() => console.log('Clicked!')} type='button'>
  Click me!
</button>`}</Code>

    <SectionTitle text='Synthetic Events' />

    <p>
      React proxies DOM events as <a href='https://facebook.github.io/react/docs/events.html' target='_blank'>Synthetic Events</a> for the sake of browser
      compatibility and most importantly speed efficiency. We guess. While you
      don’t really have to know that per se, it’s something you’ll get to
      experience at some point (for instance <a href='https://facebook.github.io/react/docs/events.html#event-pooling' target='_blank'>when trying to access an event
      within a callback</a>).
    </p>

    <SectionTitle text='Exercise - Log key code while typing' />

    <p>
      Update the component below (<code>InputKeyLogger.js</code>) to log the key
      code in the console when typed. Hint: <code>event.which</code>!
    </p>

    <Example live>
      <InputKeyLogger />
    </Example>
  </div>
)

export default Page
