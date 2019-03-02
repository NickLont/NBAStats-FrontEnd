import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { UserSelector } from 'selectors'

function withToken(WrappedComponent) {
  return class Hoc extends Component {
    render() {
      console.log('props: ', this.props)
      return <WrappedComponent {...this.props} />
    }
  }
  // return class HOC extends Component {
  //   render() {
  //     console.log('hoc here')
  //     return <WrappedComponent />
  //   }
  // }
}
const mapStateToProps = (state) => ({
  token: UserSelector.getUserToken(state)
})
export default withToken
// export default connect (mapStateToProps, {})(withToken)
