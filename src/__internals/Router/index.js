import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from '../../Home'
import HelloWorld from '../../HelloWorld'
import Props from '../../SimpleProps'
import MoreProps from '../../CompleteProps'
import State from '../../State'
import HigherOrder from '../../HigherOrder'
import Forms from '../../Forms'
import './styles.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className='Navigation'>
          <Link to='/' className='Link'>Home</Link>
          <Link to='/HelloWorld' className='Link'>Hello World</Link>
          <Link to='/SimpleProps' className='Link'>Components with props</Link>
          <Link to='/CompleteProps' className='Link'>Components with more props</Link>
          <Link to='/State' className='Link'>Stateful components</Link>
          <Link to='/HigherOrder' className='Link'>Higher-order functions</Link>
          <Link to='/Forms' className='Link'>Forms</Link>
        </div>

        <Route exact path='/' component={Home} />
        <Route path='/HelloWorld' component={HelloWorld} />
        <Route path='/SimpleProps' component={Props} />
        <Route path='/CompleteProps' component={MoreProps} />
        <Route path='/State' component={State} />
        <Route path='/HigherOrder' component={HigherOrder} />
        <Route path='/Forms' component={Forms} />
      </div>
    )
  }
}

export default Navigation
