import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthenticationActions } from "../../actions"
import { UserSelector } from "selectors"
import { PropTypes } from 'prop-types'

class Navbar extends Component {
  static propTypes = {
    logoutUser: PropTypes.func
  }
  render() {
    const { logoutUser, user } = this.props
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
              Logout {`${user || ''}`}
            </span>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  user: UserSelector.getUser(state)
})
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(AuthenticationActions.logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
