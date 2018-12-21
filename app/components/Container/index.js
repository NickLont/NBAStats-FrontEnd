import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Classnames from 'classnames'

class Container extends Component {
  static defaultProps = {
    style: {},
    contentStyle: {}
  }

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    contentStyle: PropTypes.object
  }

  render() {
    const { children, style, contentStyle } = this.props
    return (
      <div className={Classnames("container", style)} style={{ flex: 1 }}>
        <div className={Classnames(contentStyle)}>
          {children}
        </div>
      </div>
    )
  }
}

export default Container
