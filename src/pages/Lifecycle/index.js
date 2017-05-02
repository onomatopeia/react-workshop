import React from 'react'
import Code from '../../components/Code'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'
import Logger from './Logger'

const Page = (props) => (
  <div>
    <PageTitle text='Component lifecycle' />

    <p>
      A React component has something called a “lifecycle”. In simple words, it
      goes from the moment React knows it will have to be rendered, going as far
      as the moment it gets “unrendered” if necessary. There is an API in a set
      of hooks developers can use to react to certain events of the component
      lifecycle.
    </p>

    <SectionTitle text='Mounting' />

    <p>
      A component is said to have mounted when it has been fully rendered in the
      browser. It will also unmount if it gets unrendered at some point in time.
    </p>

    <p>
      When interacting, with the DOM, the window element or basically anything
      happening exclusively in the browser, you have to make sure to hook it on
      <code>componentDidMount</code> as this is when the DOM for your component
      is ready.
    </p>

    <p>
      The code snippets in this small website (rendered with
      the <code>components/Code</code> component) are highlighted with Prism.js.
      When a code block mounts, its own component uses the Prism API to
      highlight it.
    </p>

    <Code language='jsx'>{`class Code extends React.Component {
  componentDidMount () {
    if (window.Prism) {
      window.Prism.highlightElement(this.code)
    }
  }

  render () {
    const language = this.props.language ? \`language-\${this.props.language}\` : ''

    return (
      <pre className={'Pre ' + language}>
        <code className='Code' ref={(ref) => (this.code = ref)}>
          {this.props.children}
        </code>
      </pre>
    )
  }
}`}</Code>

    <p>
      You may notice this weird <code>ref</code> in the <code>render</code> method.
      A ref is a way to access the underlying actual DOM node for a component. In
      this case, we want to access the <code>pre</code> node. We store it in
      a <code>code</code> variable on the class instance. Later on we use it in
      the <code>componentDidMount</code> method to highlight the code.
    </p>

    <p>
      Feel free to have a look at <a href='https://facebook.github.io/react/docs/refs-and-the-dom.html' target='_blank'>refs in the React docs</a> to learn more.
    </p>

    <SectionTitle text='Exercise - Log when mounted' />

    <p>
      Update the following component (<code>Logger.js</code>) to log something
      in the browser console when it has been mounted.
    </p>

    <Example live>
      <Logger />
    </Example>
  </div>
)

export default Page
