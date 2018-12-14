import React, { Component } from "react"
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from "react-dom"
import "assets/sass/style.scss"
import { Navbar } from 'containers'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Routes from './routes'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
    <>
        <Navbar />
        <Routes />
    </>
    </HashRouter>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

class App extends Component {
  render() {
    return (
      <Root store={store} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
