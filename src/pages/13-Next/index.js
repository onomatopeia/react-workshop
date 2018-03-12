import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import { Link } from 'react-router-dom'
import Code from '../../components/Code'

const Page = props => (
  <div>
    <PageTitle text="What’s next?" />

    <p>
      I hope you enjoyed this workshop as much as we did! If you want to move
      forward with React, this page is for you.
    </p>

    <SectionTitle text="Go through this again" />

    <p>
      We’ve been learning quite a lot today, and that might be a good idea to go
      through all the pages and examples again to make sure you’ve grasped the
      core concepts of React.
    </p>

    <SectionTitle text="Go further on your own" />

    <p>
      If you didn’t tackle the <Link to="/YourMove">MessageBoard exercise</Link>,
      give it a try on your own. If you don’t feel like learning Redux right
      now, that’s also fine. Find an exercice you’d like to iterate on, and keep
      adding features and refinements to it.
    </p>

    <SectionTitle text="Read up on tutorials" />

    <p>
      React has a rich ecosystem and community, making it a great technology to
      learn to discover new things and get better and better with it. However,
      it can also be overwhelming so we curated a few resources you might find
      interesting to practice.
    </p>

    <ul>
      <li>
        <a
          href="http://reactpatterns.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Patterns
        </a>, a small yet insightful of useful React patterns
      </li>
      <li>
        <a
          href="https://egghead.io/courses/getting-started-with-redux"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started with Redux
        </a>, a video series from Dan Abramov, the creator of Redux and React
        core team member
      </li>
    </ul>

    <SectionTitle text="Have a look at react-router" />

    <p>
      <a
        href="https://reacttraining.com/react-router/"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-router
      </a>{' '}
      is the de-facto industry standard for routing. Any non-trivial application
      will have to use some kind of routing mechanism.
    </p>

    <Code>{`$ npm install react-router`}</Code>

    <SectionTitle text="Try create-react-app" />

    <p>
      We are well aware that setting up a full-blown React project can be
      cumbersome, especially when you want to use JSX. That’s why we went with{' '}
      <a
        href="https://github.com/facebookincubator/create-react-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        create-react-app
      </a>{' '}
      for this support and why you should have a look at it.
    </p>

    <p>
      It is a great tool to kickstart a React application without struggling
      with any sort of configuration. Just install the command line utility
      globally and create your first project!
    </p>

    <Code>{`$ npm install -g create-react-app
$ create-react-app my-project`}</Code>

    <SectionTitle text="Have a look at Next.js" />

    <p>
      Along the same lines as create-react-app, there is{' '}
      <a
        href="https://zeit.co/blog/next"
        target="_blank"
        rel="noopener noreferrer"
      >
        Next.js
      </a>{' '}
      from Zeit. It is similar while a little more opinionated. It also comes up
      with isomorphic setup out-of-the-box as well as quite a lot of nice
      features.
    </p>

    <Code>{`$ npm install next
$ $(npm bin)/next`}</Code>

    <SectionTitle text="Build some cool shit" />

    <p>
      Find a little project that you would like to build and get started! Come
      up with an idea that is simple enough so you can easily get a{' '}
      <abbr title="Minimum Viable Product">MVP</abbr> running but extensible
      enough so you don’t get bored too quickly.
    </p>

    <p>
      Have fun!{' '}
      <span role="img" aria-label="sparkles">
        ✨
      </span>
    </p>
  </div>
)

export default Page
