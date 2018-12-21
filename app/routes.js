import React from 'react'
import { HomePage, Authentication } from "./containers"
import { Route, Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />,
    <Route path="/authentication" component={Authentication} />
  </Switch>
)

export default Routes
