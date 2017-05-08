import React from 'react'
import Code from '../../components/Code'
import PageTitle from '../../components/PageTitle'
import Example from '../../components/Example'
import Button from './Button'
import ButtonStyled from './ButtonStyled'
import ButtonFela from './ButtonFela'
import ButtonJSS from './ButtonJSS'

const Page = (props) => (
  <div>
    <PageTitle text='Styling' />

    <p>
      Styling components in React can be done in many ways, from vanilla styles
      in a separate CSS file to CSS-in-JS solutions, and anything in between!
      To put it simply, this is a mess. But that also means you can pick what
      you like.
    </p>

    <p>
      In this (create-react-app) project, we use separate CSS files that are
      imported within components through some hidden Webpack magic. This means
      we can author CSS based on class names and regular selectors that we apply
      on our JSX. Under the hood, Webpack is extracting this CSS
      into <code>style</code> blocks injected in the <code>head</code> of the
      page.
    </p>

    <Code language='jsx'>{`/* Button/index.js */
import React from 'react'
import './styles.css'

const Button = (props) => (
  <button type='button' className='button'>
    {props.children}
  </button>
)

export default Button`}</Code>


<Code language='css'>{`/* Button/styles.css */
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

    <PageTitle text='CSS preprocessors' />

    <p>
      One thing about React and its componentized approach is that it makes
      preprocessors such as LESS or Sass slightly less useful. Indeed, styles do
      not have to operate in a single huge global namespace anymore and can be
      scoped within components’ reach.
    </p>

    <p>
      create-react-app provides <a href='https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc' target='_blank'>a way to use a CSS preprocessors</a> without
      having to bring own your own full configuration.
    </p>

    <p>
      <strong>Our opinion:</strong> Don’t do this. CSS-in-JS solutions provide
      as many benefits (if not more) as CSS processors like LESS or Sass.
    </p>

    <PageTitle text='CSS-in-JS (Yay)' />

    <p>There are many different solutions to this, we’ll quickly cover what
    appears to be the most popular solution – 
    <a href='https://styled-components.com/' target='_blank'>styled-components 💅
    </a>, <a href='https://github.com/cssinjs/react-jss' target='_blank'>JSS</a>,
    and our favourite – <a href='http://fela.js.org/' target='_blank'>Fela</a>.</p>

    <Example live>
      <ButtonStyled>I’m a button styled with styled-components 💅</ButtonStyled>
    </Example>
    <Example live>
      <ButtonJSS>I’m a button styled with JSS</ButtonJSS>
    </Example>
    <Example live>
      <ButtonFela>I’m a button styled with Fela</ButtonFela>
    </Example>

  </div>
)

export default Page
