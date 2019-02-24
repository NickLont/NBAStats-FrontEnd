import React from 'react'
import { HomePage, Authentication, PlayerPage } from "./containers"
import { Route, Switch } from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />,
    <Route path="/authentication" component={Authentication} />
    <Route path="/player" component={PlayerPage} />
  </Switch>
)

export default Routes
