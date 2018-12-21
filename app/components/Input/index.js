import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class Button extends Component {
  static defaultProps = {
    name: '',
    label: '',
    placeholder: '',
    style: null,
    labelStyle: null,
    onChange: () => {},
    hasError: false,
    errorText: ''
  }

  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    labelStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    inputStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    hasWarning: PropTypes.bool,
    errorText: PropTypes.string
  }

  state = {
    value: ''
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
    this.props.onChange(e)
  }

  render() {
    const {
      name,
      label,
      style,
      placeholder,
      labelStyle,
      inputStyle,
      type,
      hasError,
      hasWarning,
      errorText } = this.props
    const { value } = this.state
    return (
      <div className={
        Classnames(
          "from-group",
          "c-input",
          style,
          hasWarning ? "has-warning" : null,
          hasError ? "has-error" : null)}
      >
        <label htmlFor={name} className={Classnames(labelStyle)}>{label}</label>
        <input
          id={name}
          name={name}
          aria-describedby={name}
          placeholder={placeholder}
          className={Classnames("form-control", inputStyle)}
          value={value}
          onChange={this.onChange}
          type={type}
        />
        {errorText ?
          <span className="help-block">{errorText}</span>
          : null
        }
      </div>
    )
  }
}

export default Button
