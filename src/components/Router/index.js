import React from 'react'
import { Link, Route } from 'react-router-dom'
import Logo from '../../components/Logo'
import Home from '../../pages/Home'
import HelloWorld from '../../pages/HelloWorld'
import Props from '../../pages/SimpleProps'
import MoreProps from '../../pages/CompleteProps'
import State from '../../pages/State'
import Lifecycle from '../../pages/Lifecycle'
import HigherOrder from '../../pages/HigherOrder'
import ManipulatingData from '../../pages/ManipulatingData'
import About from '../../pages/About'
import Children from '../../pages/Children'
import Events from '../../pages/Events'
import './styles.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className='Navigation'>
          <Logo className='Logo' />
          <ol className='NavigationList'>
            <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/HelloWorld' className='Link'>Hello World</Link></li>
            <li><Link to='/SimpleProps' className='Link'>Props</Link></li>
            <li><Link to='/CompleteProps' className='Link'>More props</Link></li>
            <li><Link to='/Children' className='Link'>React Children</Link></li>
            <li><Link to='/Events' className='Link'>Events</Link></li>
            <li><Link to='/Lifecycle' className='Link'>Lifecycle</Link></li>
            <li><Link to='/State' className='Link'>Stateful components</Link></li>
            <li><Link to='/HigherOrder' className='Link'>Higher-order functions</Link></li>
            <li><Link to='/ManipulatingData' className='Link'>Manipulating Data</Link></li>
            <li><Link to='/About' className='Link'>About us</Link></li>
          </ol>
        </nav>

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
        <Route path='/About' component={About} />
      </div>
    )
  }
}

export default Navigation
