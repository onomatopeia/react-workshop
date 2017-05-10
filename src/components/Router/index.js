import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../pages/Home'
import HelloWorld from '../../pages/HelloWorld'
import Props from '../../pages/SimpleProps'
import MoreProps from '../../pages/CompleteProps'
import State from '../../pages/State'
import Lifecycle from '../../pages/Lifecycle'
import HigherOrder from '../../pages/HigherOrder'
import ManipulatingData from '../../pages/ManipulatingData'
import StateManagement from '../../pages/StateManagement'
import About from '../../pages/About'
import Children from '../../pages/Children'
import Events from '../../pages/Events'
import Styling from '../../pages/Styling'
import WrappingUp from '../../pages/WrappingUp'

const Router = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/HelloWorld' component={HelloWorld} />
    <Route path='/SimpleProps' component={Props} />
    <Route path='/CompleteProps' component={MoreProps} />
    <Route path='/Children' component={Children} />
    <Route path='/Events' component={Events} />
    <Route path='/State' component={State} />
    <Route path='/Lifecycle' component={Lifecycle} />
    <Route path='/HigherOrder' component={HigherOrder} />
    <Route path='/ManipulatingData' component={ManipulatingData} />
    <Route path='/StateManagement' component={StateManagement} />
    <Route path='/Styling' component={Styling} />
    <Route path='/WrappingUp' component={WrappingUp} />
    <Route path='/About' component={About} />
  </div>
)

export default Router
