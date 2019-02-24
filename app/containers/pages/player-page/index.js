import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => {}
const mapDispatchToProps = dispatch => {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage)
