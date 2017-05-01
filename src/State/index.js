import React from 'react'
import Timer from './timer'
import Title from '../SimpleProps/Title'

const Page = () => (
  <div>
    <Title text='Stateful components' />

    <p>
      React components can have an internal state which is useful to maintain
      component-specific information during a part of the entirety of their
      lifecycle.
    </p>

    <p>
      Below is a component updating itself to display the number of seconds
      since it has been rendered.
    </p>

    <Timer />

    <h2>Now it’s your turn!</h2>

    <p>
      Pick one of the tasks below to practice with React state system. But
      before jumping in, here are a few things you should know/remember about
      state:
    </p>

    <ul>
      <li>Updating the state of the component will cause it to re-render.</li>
      <li>Setting the state is an asynchronous action.</li>
    </ul>

    <p>Alright, let’s try this</p>

    <ul>
      <li>[Easy] Make the <code>Timer</code> component accept an initial property to set the default value for seconds.</li>
      <li>[Medium] Build a component that ask for confirmation before leaving the page.</li>
      <li>[Medium] Display the live mouse position on the page.</li>
      <li>[Hard] Find a simple third-party library and initialise it inside your component (e.g.: Flickity, a11y-dialog…).</li>
    </ul>
  </div>
)

export default Page
