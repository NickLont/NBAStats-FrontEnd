import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Login, Container, Register, Button } from 'components'
import { AuthenticationActions } from "actions"
import { connect } from "react-redux"
import { UserSelector } from "../../../selectors"

class Authentication extends Component {
  static defaultProps = {
    loginUser: () => {}
  }

  static propTypes = {
    loginUser: PropTypes.func
  }

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
    const { loginUser, error } = this.props

    return (
      <Container style="authentication-page">
        <div  className="authentication-page__container">
          <div className="btn-toolbar authentication-page__buttons">
            <Button label="Login" name="login" onClick={this.onClick} />
            <Button label="Register" name="register" onClick={this.onClick} />
          </div>
          <div className="authentication-page__container--input">
            {inLogin
              ? <Login onLogin={loginUser} error={error} />
              : <Register />
            }
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  error: UserSelector.getUserError(state),
  loading: UserSelector.getUserLoading(state)
})
const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(AuthenticationActions.loginUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication)
