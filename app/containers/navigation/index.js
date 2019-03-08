import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthenticationActions } from "../../actions"

class Navbar extends Component {
  render() {
    const { logoutUser } = this.props
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
              to='/authentication'
              className="navbar__link"
              activeClassName="navbar__link--active"
            >
              Item 2
            </NavLink>
          </li>
          <li
            className="navbar__item"
            onClick={logoutUser}
          >
            <span
              className="navbar__link">
              Logout
            </span>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(AuthenticationActions.logoutUser())
})

export default connect(() => ({}), mapDispatchToProps)(Navbar)
