import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { DefaultButtonScreen } from '../screens';

const navigator = createBrowserHistory();

export const AppNavigation: React.SFC = () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/buttons" component={DefaultButtonScreen} />
      <Redirect from="/*" to="/buttons" />
    </Switch>
  </Router>
);
