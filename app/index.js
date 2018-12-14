import React, { Component } from "react"
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from "react-dom"
import "assets/sass/style.scss"
import { HomePage, Navbar, LoginPage } from 'containers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

const store = configureStore()

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
    <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
    </>
    </BrowserRouter>
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
