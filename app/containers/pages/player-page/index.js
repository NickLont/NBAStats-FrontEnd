import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withToken from 'containers/hocs/withToken'
import { UserSelector } from "../../../selectors" //TODO see why barrel imports don t work on hocs for compose

class PlayerPage extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {}

  render() {
    // console.log('token: ', this.props.token)
    return (
      <div>
        <p>Player Page</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: UserSelector.getUserToken(state)
})

export default compose(
  connect(
    mapStateToProps
  ),
  withToken
)(PlayerPage)
