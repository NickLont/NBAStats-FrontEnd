import React, { Component } from "react"
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from "react-dom"
import "assets/sass/style.scss"
import { HomePage } from 'containers'
import { Navbar } from "./containers"

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HomePage />
      </>
    )
  }
}
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
