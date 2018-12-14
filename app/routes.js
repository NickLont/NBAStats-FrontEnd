import React from 'react'
import { HomePage, LoginPage } from "./containers"
import { Route, Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />,
    <Route path="/login" component={LoginPage} />
  </Switch>
)

export default Routes
