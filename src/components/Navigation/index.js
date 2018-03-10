import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import './styles.css'

const Navigation = props => (
  <nav className="Navigation">
    <Logo className="Logo" />
    <ol className="NavigationList">
      <li className="NavigationItem">
        <NavLink exact to="/" className="NavigationLink">
          Home
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/HelloWorld" className="NavigationLink">
          Hello World
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/SimpleProps" className="NavigationLink">
          Simple Props
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/CompleteProps" className="NavigationLink">
          Complete props
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/Children" className="NavigationLink">
          React Children
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/Events" className="NavigationLink">
          Events
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/Lifecycle" className="NavigationLink">
          Lifecycle
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/State" className="NavigationLink">
          Stateful components
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/StateManagement" className="NavigationLink">
          State management
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/HigherOrder" className="NavigationLink">
          Higher-order functions
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/Styling" className="NavigationLink">
          Styling
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/YourMove" className="NavigationLink">
          Your Move
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/Next" className="NavigationLink">
          What’s next?
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink to="/About" className="NavigationLink">
          About us
        </NavLink>
      </li>
    </ol>
  </nav>
)

export default Navigation
