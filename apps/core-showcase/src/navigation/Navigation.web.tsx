/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { DefaultAppBarScreen } from '../screens/app-bar';
import {
  ContainedButtonShowcaseScreen,
  ContainedShapedButtonShowcaseScreen,
  DefaultButtonShowcaseScreen,
  FabButtonShowcaseScreen,
  HighlightedButtonShowcaseScreen,
  IconButtonShowcaseScreen,
  OutlinedButtonShowcaseScreen,
  OutlinedShapedButtonShowcaseScreen,
  XFabButtonShowcaseScreen,
} from '../screens/button';
import { IconShowcaseScreen } from '../screens/icon';
import {
  LargeListIconTwoLinesScreen,
  LargeListTwoLinesScreen,
  ListShowcaseScreen,
  MediumListIconCustomThemeScreen,
  MediumListIconScreen,
  SmallListIconScreen,
  SmallListScreen,
  XLargeListIconTwoLinesScreen,
  XSmallListIconScreen,
  XSmallListScreen,
  XXLargeListIconThreeLinesScreen,
  XXSmallListIconScreen,
  XXSmallListScreen,
} from '../screens/list';
import { SurfaceScreen } from '../screens/surface';
import { SvgShowcaseScreen } from '../screens/svg';
import { TestShowcaseScreen } from '../screens/test';
import { RfxTextScreen } from '../screens/text';
import { TouchableSurfaceScreen } from '../screens/touchable-surface';

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
      <Route exact path="/list/xxsmall-list" component={XXSmallListScreen} />
      <Route
        exact
        path="/list/xxsmall-icon"
        component={XXSmallListIconScreen}
      />
      <Route exact path="/list/xsmall-list" component={XSmallListScreen} />
      <Route
        exact
        path="/list/xsmall-list-icon"
        component={XSmallListIconScreen}
      />
      <Route exact path="/list/small-list" component={SmallListScreen} />
      <Route
        exact
        path="/list/small-list-icon"
        component={SmallListIconScreen}
      />
      <Route
        exact
        path="/list/medium-list-icon"
        component={MediumListIconScreen}
      />
      <Route
        exact
        path="/list/medium-list-icon-custom-theme"
        component={MediumListIconCustomThemeScreen}
      />
      <Route
        exact
        path="/list/large-list-two-lines"
        component={LargeListTwoLinesScreen}
      />
      <Route
        exact
        path="/list/large-list-icon-two-lines"
        component={LargeListIconTwoLinesScreen}
      />
      <Route
        exact
        path="/list/xlarge-list-icon-two-lines"
        component={XLargeListIconTwoLinesScreen}
      />
      <Route
        exact
        path="/list/xxlarge-list-icon-three-lines"
        component={XXLargeListIconThreeLinesScreen}
      />
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
