import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'components'

class Register extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {
    username: '',
    password: '',
    repeatPassword: ''
  }

  onChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { repeatPassword, password } = this.state
    const isDisabled = password.length < 3 || repeatPassword.length < 3 || repeatPassword !== password
    console.log(isDisabled)
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
        <Input
          placeholder="Repeat your Password"
          name='repeatPassword'
          label="Repeat Password"
          type='password'
          onChange={this.onChange}
        />
        <Button
          label="Register"
          isPrimary
          disabled={isDisabled}
        >
          Register
        </Button>
      </>
    )
  }
}

export default Register
