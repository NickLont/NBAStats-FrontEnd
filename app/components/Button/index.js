import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class Button extends Component {
  static defaultProps = {
    name: '',
    onClick: () => {},
    label: '',
    style: null,
    isPrimary: false,
    disabled: false
  }

  static propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isPrimary: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {
    const { name, onClick, label, style, isPrimary, disabled } = this.props
    return (
      <button
        className={Classnames("c-button", "btn", isPrimary ? "btn-primary" : null, style)}
        name={name}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    )
  }
}

export default Button
