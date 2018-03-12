import React from 'react'
import UserIndex from '../4-CompleteProps/UserIndex'
import Code from '../../components/Code'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Example from '../../components/Example'
import Button from './Button'
import ButtonStyled from './ButtonStyled'
import ButtonFela from './ButtonFela'
import ButtonJSS from './ButtonJSS'

const Page = props => (
  <div>
    <PageTitle text="Styling" />

    <p>
      Styling components in React can be done in many ways, from standard
      styling in CSS files to CSS-in-JS solutions, and anything in between (CSS
      modules, preprocessors…)! To put it simply, this is a mess. But that also
      means you can pick what you like.
    </p>

    <p>
      In this (create-react-app) project, we use separate CSS files that are
      imported within components through some hidden Webpack magic. This means
      we can author CSS based on class names and regular selectors that we apply
      on our JSX. Under the hood, Webpack is extracting this CSS into{' '}
      <code>style</code> blocks injected in the <code>head</code> of the page.
    </p>

    <Code language="jsx">{`/* Button/index.js */
import React from 'react'
import './styles.css'

const Button = (props) => (
  <button type='button' className='button'>
    {props.children}
  </button>
)

export default Button`}</Code>

    <Code language="css">{`/* Button/styles.css */
.button {
  border: 1px solid;
  color: rgb(52, 183, 188);
  padding: 0.5em 1em;
  font: inherit;
  background-color: transparent;
  border-radius: 0.25em;
}

.button:hover,
.button:active {
  background-color: rgb(52, 183, 188);
  color: white;
}
`}</Code>

    <Example live>
      <Button>I’m a button</Button>
    </Example>

    <SectionTitle text="CSS preprocessors" />

    <p>
      One thing about React and its componentized approach is that it makes
      preprocessors such as LESS or Sass slightly less useful. Indeed, styles do
      not have to operate in a single huge global namespace anymore and can be
      scoped within components’ reach.
    </p>

    <p>
      create-react-app provides{' '}
      <a
        href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc"
        target="_blank"
        rel="noopener noreferrer"
      >
        a way to use a CSS preprocessors
      </a>{' '}
      without having to bring own your own full configuration.
    </p>

    <p>
      <strong>Our opinion:</strong> Don’t do this. CSS-in-JS solutions provide
      as many benefits (if not more) as CSS processors like LESS or Sass.
    </p>

    <SectionTitle text="CSS-in-JS" />

    <p>
      There are many different solutions to this, we’ll quickly cover what
      appears to be the most popular solutions –
      <a
        href="https://styled-components.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        styled-components
      </a>{' '}
      and{' '}
      <a
        href="https://github.com/cssinjs/react-jss"
        target="_blank"
        rel="noopener noreferrer"
      >
        JSS
      </a>, as well as our favourite –{' '}
      <a href="http://fela.js.org/" target="_blank" rel="noopener noreferrer">
        Fela
      </a>.
    </p>

    <h3>JSS</h3>

    <p>
      JSS is sort of a precursor of CSS-in-JS and relies on{' '}
      <abbr
        title="Plain-Old
      JavaScript Object"
      >
        POJO
      </abbr>{' '}
      as a way to define styles. In a React application, these styles would be
      bound to a component with a Higher-Order function.
    </p>

    <p>
      Under the hood, JSS would generate a <code>style</code> block in the head
      of the document and inject styles bound to dynamically generated class
      names in it.
    </p>

    <p>
      Below is a button styled with JSS. You can find it in{' '}
      <code>ButtonJSS/index.js</code>.
    </p>

    <Example live>
      <ButtonJSS>I’m a button styled with JSS</ButtonJSS>
    </Example>

    <h3>styled-components</h3>

    <p>
      styled-components is kind of the cool kid on the block when it comes to
      CSS-in-JS solutions. Its very own particularity is that it relies on
      tagged template literals to make it possible to author styles as plain
      text.
    </p>

    <p>
      It works pretty much the same way as JSS and generate a <code>style</code>{' '}
      block in the head of the page to inject styles.
    </p>

    <p>
      Below is a button styled with styled-components. You can find it in{' '}
      <code>ButtonStyled/index.js</code>.
    </p>

    <Example live>
      <ButtonStyled>I’m a button styled with styled-components</ButtonStyled>
    </Example>

    <h3>Fela</h3>

    <p>
      Fela is by far our favourite implementation of CSS-in-JS. Not only is it
      slightly more permissive regarding what to do with the generated styles
      (such as where to render them), it also provides atomic CSS out of the
      box. Fela enables you to keep writing component-driven CSS, but cuts your
      rules on individual properties to minimize the CSS output.
    </p>

    <Example live>
      <ButtonFela>I’m a button styled with Fela</ButtonFela>
    </Example>

    <p>
      Feel free to compare the DOM generated by these 3 buttons to see how
      different these solutions are. Also have a look at the <code>head</code>.
    </p>

    <SectionTitle text="Exercise A - Dive into CSS-in-JS" />

    <p>
      Pick one of the 3 aforementioned CSS-in-JS solutions and add some styles
      to the <code>User</code> and <code>UserList</code> components in the{' '}
      <code>CompleteProps</code> folder.
    </p>

    <Example live>
      <UserIndex />
    </Example>

    <SectionTitle text="Exercise B - Use dynamic props" />

    <p>
      One of the major benefits of using JavaScript to apply styles is that it
      makes state-based styling very easy. If you have to create state class
      names in CSS to do so, you can use dynamic rules in CSS-in-JS to do it.
    </p>

    <p>
      Try updating the <code>UserIndex</code> component to style it based on the
      data. For instance, you could apply different styles based on age,
      nationality, or email provider.
    </p>

    <Example live>
      <UserIndex />
    </Example>
  </div>
)

export default Page
