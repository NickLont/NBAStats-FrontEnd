import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from 'react-dom'
import "assets/sass/style.scss"
import { Navbar } from 'containers'
import { Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import Routes from 'routes'
import history from 'historyConfig'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className="main-wrapper">
        <Navbar />
        <Routes />
      </div>
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

class App extends Component {
  render() {
    console.log('history: ', history)
    return (
      <Root store={store} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
