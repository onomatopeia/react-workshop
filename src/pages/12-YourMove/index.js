import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'
import MessageBoard from './App'

const Page = props => (
  <div>
    <PageTitle text="Your Move" />

    <p>
      To wrap things up, let’s build a tiny yet somehow complete project: a
      little message board. This should make use of almost everything we’ve seen
      so far. To not feel overwhelmed though, we’ll start this project with
      something relatively simple and add more to it.
    </p>

    <SectionTitle text="Dynamic UI" />

    <p>
      To make things easier and faster for you, we already created the component
      with all its relevant parts. For now, you only have to make it so the UI
      becomes a bit more dynamic. This means:
    </p>

    <ul>
      <li>
        The counter should be based on the content of the textarea. It should
        start at 280 and decrements as you type in. It should keep running below
        0, like on Twitter.
      </li>
      <li>
        The button should be disabled when the textarea’s content is longer than
        280 characters.
      </li>
    </ul>

    <Example live>
      <MessageBoard />
    </Example>

    <SectionTitle text="Dynamic styling" />

    <p>
      If you want to play with logic rather than styling, feel free to skip
      directly to the next section.
    </p>

    <p>
      Use a CSS-in-JS solution to add some styles to this app. Don’t go too
      fancy, and be sure to implement the following features:
    </p>

    <ul>
      <li>The button has specific styles when disabled.</li>
      <li>
        The textarea and the counter have specific styles when reaching below 0.
      </li>
    </ul>

    <SectionTitle text="Redux integration" />

    <p>
      For the last part of this exercise, you will have to make your message
      sender work! To save you from the boilerplate, we created a Redux store,
      an empty reducer, an empty action and connected everything for you. Feel
      free to have a look at the code in the current folder before jumping in.
    </p>

    <ul>
      <li>
        In <code>actions.js</code>, there is an empty <code>addMessage</code>{' '}
        action that you need to complete.
      </li>
      <li>
        In <code>reducer.js</code>, you need to make your reducer handle your
        action.
      </li>
      <li>
        In <code>components/Form.js</code>, you need to make your button fire
        your dispatched action.
      </li>
    </ul>

    <p>
      <span role="img" aria-label="star">
        ⭐️
      </span>{' '}
      If everything works, you should see messages above the form. And if you
      feel like pushing things further, be sure to do so!
    </p>
  </div>
)

export default Page
