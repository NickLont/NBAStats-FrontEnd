import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav role="navigation">
        <ul className="navbar">
          <li className="navbar__item">
            <NavLink
              exact
              to='/'
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Item 1
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to='/login'
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Item 2
            </NavLink>
          </li>
          <li className="navbar__link">Item 3</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
