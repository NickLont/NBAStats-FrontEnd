import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'components'

class Index extends Component {
  static defaultProps = {}

  static propTypes = {}

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

  render() {
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
        <Button label="Login" isPrimary />
      </>
    )
  }
}

export default Index
