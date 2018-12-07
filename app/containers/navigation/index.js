import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {}

  render() {
    return (
      <nav role="navigation">
        <ul className="navbar">
          <li className="navbar__item">Item 1</li>
          <li className="navbar__item">Item 2</li>
          <li className="navbar__item">Item 3</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
