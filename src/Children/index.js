import React from 'react'
import PageTitle from '../__internals/PageTitle'
import Code from '../__internals/Code'

const Page = (props) => (
  <div>
    <PageTitle text='React Children' />

    <p>
      Generally speaking, you are free to name your props the way you want.
      However there is one name you should avoid using for your own
      props: <code>children</code>. This is “magic prop” that exists on all
      React elements by default and that contains whatever is being rendered
      between the opening tag and the closing tag (if any).
    </p>

    <p>
      Remember how we made our <code>Title</code> component accept
      a <code>text</code> prop to render it in a <code>h1</code>? It currently
      looks like this:
    </p>

    <Code language='jsx'>{`<Title text='React Children' />`}</Code>

    <p>
      What if instead we could use our component like this:
    </p>

    <Code language='jsx'>{`<Title>React Children</Title>`}</Code>

    <p>
      Not only does it feel more natural but it also enables use to render
      inner components if we need to (links, icons…). To do so, we can access
      the content passed between tags with <code>props.children</code>.
    </p>

    <Code language='jsx'>{`const Title = (props) => <h1>{props.children}</h1>`}</Code>
  </div>
)

export default Page
