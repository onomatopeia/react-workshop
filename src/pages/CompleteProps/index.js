import React from 'react'
import PageTitle from '../../components/PageTitle'
import Code from '../../components/Code'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'
import UserIndex from './UserIndex'

const Page = (props) => (
  <div>
    <PageTitle text='Getting deeper into props' />

    <p>
      More often that not, a component will render sub-components which may
      themselves render sub-components, ultimately forming a “reverse tree”.
      Think of the root node as the trunk, then its components as the branches,
      which may have over branches, and so on.
    </p>

    <p>
      Here, we render a <code>UserIndex</code> component which renders a title
      and a <code>UserList</code> component, which itself renders
      some <code>User</code> components.
    </p>

    <p>
      Be sure to have a look at the code in the files from this folder!
    </p>

    <Example live>
      <UserIndex />
    </Example>

    <SectionTitle text='Props validation' />

    <p>
      In components <code>User</code> and <code>UserList</code>, you might see
      that we are performing some sort of props validation. This helps us make
      sure our components receive the correct props and to ensure their presence
      if they are required. Also note that this is stripped entirely when
      running React in production mode.
    </p>

    <Code language='js'>{`import PropTypes from 'prop-types'

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  preferredName: PropTypes.string
}`}</Code>

    <p>
      Of course this is not mandatory and tends more and more to be replaced by
      something like <a href='https://flow.org/' target='_blank'>Flow</a> or <a href='http://www.typescriptlang.org/' target='_blank'>TypeScript</a>.
    </p>

    <SectionTitle text='Exercise A - Add yourself to the user list' />

    <p>
      Add another entry to the following user list with your name and email (as
      well as your nickname if you use one).
    </p>

    <Example live>
      <UserIndex />
    </Example>

    <SectionTitle text='Exercise B - Add another prop to users' />

    <p>
      Try adding an extra information to users (such as a nationality, or an
      age) and render it the way you want. Pro tip: remember to add some prop
      types validation!
    </p>

    <Example live>
      <UserIndex />
    </Example>
  </div>
)

export default Page
