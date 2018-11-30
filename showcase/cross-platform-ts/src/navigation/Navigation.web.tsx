/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { DefaultButtonScreen } from '../screens';

const navigator = createBrowserHistory();

const AppNavigation: React.SFC = () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/buttons" component={DefaultButtonScreen} />
      <Redirect from="/*" to="/buttons" />
    </Switch>
  </Router>
);

AppNavigation.displayName = 'AppNavigation';

export { AppNavigation };
