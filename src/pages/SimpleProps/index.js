import React from 'react'
import Title from './Title'
import Code from '../../components/Code'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'

const Page = (props) => (
  <div>
    <Title text='Props' />

    <p>
      As we have seen from the previous example, a React component can be seen
      as a function that accepts “props” (really just a fancy name for “data”)
      and that outpus some markup in the form of JSX.
    </p>

    <p>
      All components, even those not using any props (like
      our <code>HelloWorld</code> component from earlier) receives an object
      (possibly empty) as props.
    </p>

    <p>
      Let’s consider a <code>Title</code> component that would accept a text
      prop. Here is how we could write it:
    </p>

    <Code language='jsx'>{`import React from 'react'

const Title = (props) => <h1>{props.text}</h1>

export default Title`}</Code>

    <p>
      This is how the title of this page has been rendered. You can find the
      component definition in <code>Title.js</code>.
    </p>

    <Code language='jsx'>{`<Title text='Props' />`}</Code>

    <SectionTitle text='Exercise - Change title content' />

    <p>
      Update the following <code>Title</code> component to display the content
      of your choice.
    </p>

    <Example live>
      <Title text='Update me, I’m famous' />
    </Example>
  </div>
)

export default Page
