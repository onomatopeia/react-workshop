import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../pages/1-Home'
import HelloWorld from '../../pages/2-HelloWorld'
import Props from '../../pages/3-SimpleProps'
import MoreProps from '../../pages/4-CompleteProps'
import Children from '../../pages/5-Children'
import Events from '../../pages/6-Events'
import Lifecycle from '../../pages/7-Lifecycle'
import State from '../../pages/8-State'
import StateManagement from '../../pages/9-StateManagement'
import HigherOrder from '../../pages/10-HigherOrder'
import Styling from '../../pages/11-Styling'
import YourMove from '../../pages/12-YourMove'
import Next from '../../pages/13-Next'
import About from '../../pages/14-About'

const Router = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/HelloWorld' component={HelloWorld} />
    <Route path='/SimpleProps' component={Props} />
    <Route path='/CompleteProps' component={MoreProps} />
    <Route path='/Children' component={Children} />
    <Route path='/Events' component={Events} />
    <Route path='/Lifecycle' component={Lifecycle} />
    <Route path='/State' component={State} />
    <Route path='/StateManagement' component={StateManagement} />
    <Route path='/HigherOrder' component={HigherOrder} />
    <Route path='/Styling' component={Styling} />
    <Route path='/YourMove' component={YourMove} />
    <Route path='/Next' component={Next} />
    <Route path='/About' component={About} />
  </div>
)

export default Router
