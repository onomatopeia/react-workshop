import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './__internals/Main'
import Router from './__internals/Router'
import Page from './__internals/Page'
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
