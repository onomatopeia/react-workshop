import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Router from './__internals/Router'
import Page from './__internals/Page'
import './index.css'

ReactDOM.render(
  <HashRouter>
    <Page>
      <Router />
    </Page>
  </HashRouter>,
  document.getElementById('root')
)
