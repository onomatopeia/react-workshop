import React from 'react'
import Example from '../../components/Example'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Search from './Search'

const Page = (props) => (
  <div>
    <PageTitle text='Manipulating Data' />

    <p>
      In the following example, we use our <code>UserList</code> component from
      earlier and feature it with a search field so it gets easier to use. This
      field is in fact a form that updates the URL on submit, and gets enhanced
      by our React component to also filter on key press.
    </p>

    <Example live>
      <Search {...props} />
    </Example>

    <SectionTitle text='Containers & components' />

    <p>
      In the React world, you might hear about “containers”. Containers are
      really just regular components, if only that they handle most of the
      logic. Usually, a container deals with getting and transforming the data
      so that a rather dumb component can simply render it.
    </p>

    <p>
      In the user list example, the
      container <code>UserListContainer.js</code> is responsible for filtering
      and sorting the users, while the component (<code>CompleteProps/UserList.js</code>)
      deals with rendering the list.
    </p>
  </div>
)

export default Page
