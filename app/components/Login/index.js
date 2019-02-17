import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'components'

class Index extends Component {
  static defaultProps = {
    onLogin: () => {}
  }

  static propTypes = {
    onLogin: PropTypes.func
  }

  state = {
    username: '',
    password: ''
  }

  onChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  onClick = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.onLogin(user)
  }

  render() {
    const { username, password } = this.state
    const isDisabled = password.length < 3 || username.length < 3
    return (
      <>
        <Input
          placeholder="Enter your Username"
          name='username'
          label="Username"
          onChange={this.onChange}
        />
        <Input
          placeholder="Enter your Password"
          name='password'
          label="Password"
          type='password'
          onChange={this.onChange}
        />
        <Button
          label="Login"
          isPrimary
          disabled={isDisabled}
          onClick = {this.onClick}
        />
      </>
    )
  }
}

export default Index
