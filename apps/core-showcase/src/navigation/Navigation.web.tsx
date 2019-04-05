/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createBrowserHistory } from 'history';
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
  IconShowcaseScreen,
  ListShowcaseScreen,
  OutlinedButtonShowcaseScreen,
  OutlinedShapedButtonShowcaseScreen,
  RfxTextScreen,
  SurfaceScreen,
  SvgShowcaseScreen,
  TestShowcaseScreen,
  TouchableSurfaceScreen,
  XFabButtonShowcaseScreen,
} from '../screens';

const navigator = createBrowserHistory();

const AppNavigation: React.SFC = () => (
  <Router history={navigator}>
    <Switch>
      <Route exact path="/app-bar" component={DefaultAppBarScreen} />
      <Route
        exact
        path="/button/contained"
        component={ContainedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/button/contained-shaped"
        component={ContainedShapedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/button/default"
        component={DefaultButtonShowcaseScreen}
      />
      <Route exact path="/button/fab" component={FabButtonShowcaseScreen} />
      <Route
        exact
        path="/button/highlighted"
        component={HighlightedButtonShowcaseScreen}
      />
      <Route exact path="/button/icon" component={IconButtonShowcaseScreen} />
      <Route
        exact
        path="/button/outlined"
        component={OutlinedButtonShowcaseScreen}
      />
      <Route
        exact
        path="/button/outlined-shaped"
        component={OutlinedShapedButtonShowcaseScreen}
      />
      <Route exact path="/button/xfab" component={XFabButtonShowcaseScreen} />
      <Route exact path="/icon" component={IconShowcaseScreen} />
      <Route exact path="/list" component={ListShowcaseScreen} />
      <Route exact path="/surface" component={SurfaceScreen} />
      <Route exact path="/svg" component={SvgShowcaseScreen} />
      <Route exact path="/test" component={TestShowcaseScreen} />
      <Route exact path="/text" component={RfxTextScreen} />
      <Route
        exact
        path="/touchable-surface"
        component={TouchableSurfaceScreen}
      />
      <Redirect from="/*" to="/button/default" />
    </Switch>
  </Router>
);

AppNavigation.displayName = 'AppNavigation';

export { AppNavigation };
