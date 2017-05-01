import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from '../../Home'
import HelloWorld from '../../HelloWorld'
import Props from '../../SimpleProps'
import MoreProps from '../../CompleteProps'
import State from '../../State'
import HigherOrder from '../../HigherOrder'
import Forms from '../../Forms'
import Children from '../../Children'
import './styles.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className='Navigation'>
          <ol>
            <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/HelloWorld' className='Link'>Hello World</Link></li>
            <li><Link to='/SimpleProps' className='Link'>Props</Link></li>
            <li><Link to='/CompleteProps' className='Link'>More props</Link></li>
            <li><Link to='/Children' className='Link'>React Children</Link></li>
            <li><Link to='/State' className='Link'>Stateful components</Link></li>
            <li><Link to='/HigherOrder' className='Link'>Higher-order functions</Link></li>
            <li><Link to='/Forms' className='Link'>Forms</Link></li>
          </ol>
        </div>

        <Route exact path='/' component={Home} />
        <Route path='/HelloWorld' component={HelloWorld} />
        <Route path='/SimpleProps' component={Props} />
        <Route path='/CompleteProps' component={MoreProps} />
        <Route path='/Children' component={Children} />
        <Route path='/State' component={State} />
        <Route path='/HigherOrder' component={HigherOrder} />
        <Route path='/Forms' component={Forms} />
      </div>
    )
  }
}

export default Navigation
