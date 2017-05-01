import Timer from './timer'
import React from 'react'

const Page = () => (
  <div>
    <Timer />
    <hr />
    <h2>Pick a task below (15 minutes):</h2>
    <ul>
      <li>[Easy] Make the <code>Timer</code> component accept an initial property to set the default value for seconds.</li>
      <li>[Medium] Build a component that ask for confirmation before leaving the page.</li>
      <li>[Medium] Display the live mouse position on the page.</li>
      <li>[Hard] Find a simple third-party library and initialise it inside your component (e.g.: Flickity, a11y-dialog…).</li>
    </ul>
  </div>
)

export default Page
