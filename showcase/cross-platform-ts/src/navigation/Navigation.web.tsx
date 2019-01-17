/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import {
  ContainedButtonShowcaseScreen,
  ContainedShapedButtonShowcaseScreen,
  DefaultAppBarScreen,
  DefaultButtonShowcaseScreen,
  FabButtonShowcaseScreen,
  HighlightedButtonShowcaseScreen,
  IconButtonShowcaseScreen,
  OutlinedButtonShowcaseScreen,
  OutlinedShapedButtonShowcaseScreen,
  TypographyScreen,
} from '../screens';

const navigator = createBrowserHistory();

const AppNavigation: React.SFC = () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/app-bars" component={DefaultAppBarScreen} />
      <Route
        exact
        path="/buttons/contained"
        component={ContainedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/buttons/contained-shaped"
        component={ContainedShapedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/buttons/default"
        component={DefaultButtonShowcaseScreen}
      />
      <Route exact path="/buttons/fab" component={FabButtonShowcaseScreen} />
      <Route
        exact
        path="/buttons/highlighted"
        component={HighlightedButtonShowcaseScreen}
      />
      <Route exact path="/buttons/icon" component={IconButtonShowcaseScreen} />
      <Route
        exact
        path="/buttons/outlined"
        component={OutlinedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/buttons/outlined-shaped"
        component={OutlinedShapedButtonShowcaseScreen}
      />
      <Route exact path="/typography" component={TypographyScreen} />
      <Redirect from="/*" to="/buttons/default" />
    </Switch>
  </Router>
);

AppNavigation.displayName = 'AppNavigation';

export { AppNavigation };
