import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withToken from 'containers/hocs/withToken' //TODO see why barrel imports don t work on hocs for compose

class PlayerPage extends Component {
  static defaultProps = {}

  static propTypes = {}

  state = {}

  render() {
    return (
      <div>
        <p>Player Page</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withToken
)(PlayerPage)
