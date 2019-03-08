import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserSelector } from 'selectors'

// connected High Order Component to pass the token to wrapped components
const withToken = (WrappedComponent) => {
  const Wrapper = () => (
    class HOC extends Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  )
  return connect(mapStateToProps)(Wrapper())
}
const mapStateToProps = (state) => ({
  token: UserSelector.getUserToken(state)
})

export default withToken
