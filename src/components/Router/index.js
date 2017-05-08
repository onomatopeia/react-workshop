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
import StateManagement from '../../pages/StateManagement'
import About from '../../pages/About'
import Children from '../../pages/Children'
import Events from '../../pages/Events'
import Styling from '../../pages/Styling'
import './styles.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className='Navigation'>
          <Logo className='Logo' />
          <ol className='NavigationList'>
            <li className='NavigationItem'>
              <Link to='/' className='Link'>Home</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/HelloWorld' className='Link'>Hello World</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/SimpleProps' className='Link'>Props</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/CompleteProps' className='Link'>More props</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/Children' className='Link'>React Children</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/Events' className='Link'>Events</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/Lifecycle' className='Link'>Lifecycle</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/State' className='Link'>Stateful components</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/HigherOrder' className='Link'>Higher-order functions</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/ManipulatingData' className='Link'>Manipulating Data</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/Styling' className='Link'>Styling</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/StateManagement' className='Link'>State management</Link>
            </li>
            <li className='NavigationItem'>
              <Link to='/About' className='Link'>About us</Link>
            </li>
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
        <Route path='/StateManagement' component={StateManagement} />
        <Route path='/Styling' component={Styling} />
        <Route path='/About' component={About} />
      </div>
    )
  }
}

export default Navigation
