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

    <SectionTitle text='Exercise A - Change title content (easy)' />

    <p>
      Update the following <code>Title</code> component to display the content
      of your choice.
    </p>

    <Example live>
      <Title text='Update me, I’m famous' />
    </Example>

    <SectionTitle text='Exercise B - Add id attribute (medium)' />

    <p>
      Update the following <code>Title</code> component to accept and render an
      <code>id</code> attribute.
    </p>

    <Example live>
      <Title text='I want an id!' />
    </Example>

    <SectionTitle text='Exercise C - Change heading level (hard)' />

    <p>
      Update the <code>Title</code> component to accept a heading level (1 to 6)
      and render the correct element based on that. If you don’t manage it right
      now, don’t panic! This is not obvious.
    </p>

    <Example live>
      <Title text='How about a H2?' />
    </Example>

    <p>
      Remember that the <code>Title</code> component is being rendered several
      times in this page. Therefore, you will have to make sure to set up a
      default value for that heading level / element prop.
    </p>
  </div>
)

export default Page
