import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { WelcomeSignedOutScreen } from '../application/welcome';
const navigator = createBrowserHistory();

export default () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/welcome" component={WelcomeSignedOutScreen} />
      <Redirect from="/*" to="/welcome" />
    </Switch>
  </Router>
);
