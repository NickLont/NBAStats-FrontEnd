import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Login, Container, Register, Button } from 'components'

class Authentication extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {
    inLogin: true
  }
  onClick = (e) => {
    const { name } = e.target
    if (name === 'register') {
      this.setState({ inLogin: false })
    }
    if (name === 'login') {
      this.setState({ inLogin: true })
    }
  }

  render() {
    const { inLogin } = this.state
    return (
      <Container style="authentication-page">
        <div  className="authentication-page__container">
          <div className="btn-toolbar authentication-page__buttons">
            <Button label="Login" name="login" onClick={this.onClick} />
            <Button label="Register" name="register" onClick={this.onClick} />
          </div>
          <div className="authentication-page__container--input">
            {inLogin
              ? <Login  />
              : <Register />
            }
          </div>
        </div>
      </Container>
    )
  }
}

export default Authentication
