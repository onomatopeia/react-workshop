import React from 'react'
import Title from '../SimpleProps/Title'
import UserIndex from './UserIndex'
import Code from '../__internals/Code'

const Page = (props) => (
  <div>
    <Title text='Component with complex props' />

    <p>
      More often that not, a component will render sub-components which may
      themselves render sub-components. Here, we render
      a <code>UserIndex</code> component which renders a title and
      a <code>UserList</code> component, which renders
      some <code>User</code> components.
    </p>

    <p>Be sure to have a look at the code in the files from this folder!</p>

    <UserIndex />
  </div>
)

export default Page
