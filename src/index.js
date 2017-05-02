import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './components/Main'
import Router from './components/Router'
import Page from './components/Page'
import './index.css'

ReactDOM.render(
  <HashRouter>
    <Main>
      <Page>
        <Router />
      </Page>
    </Main>
  </HashRouter>,
  document.getElementById('root')
)
