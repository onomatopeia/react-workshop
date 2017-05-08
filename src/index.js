import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './components/Main'
import App from './components/App'
import Page from './components/Page'
import './index.css'
// Fela Setup
// http://fela.js.org/docs/guides/UsageWithReact.html
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'

const renderer = createRenderer()
// The provider will automatically renderer the styles
// into the mountNode on componentWillMount
const mountNode = document.getElementById('fela-stylesheet')

ReactDOM.render(
  <HashRouter>
    <Provider renderer={renderer} mountNode={mountNode}>
      <Main>
        <Page>
          <App />
        </Page>
      </Main>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)
