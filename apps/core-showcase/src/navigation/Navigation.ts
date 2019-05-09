/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Navigation } from 'react-native-navigation';

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
import { ViewScreen } from '../screens/view';
import { withAppLogic } from '../withAppLogic';

const appNavigationPrefix = 'reflexui.showcase.navigation';

const createNavScreenId = (screenId: string) =>
  `${appNavigationPrefix}.${screenId}`;

const AppBarNavigation = {
  default: `${appNavigationPrefix}appBar.DefaultAppBarScreen`,
};

const ButtonNavigation = {
  contained: createNavScreenId('button.ContainedButtonScreen'),
  containedShaped: createNavScreenId('button.ContainedShapedButtonScreen'),
  default: createNavScreenId('button.DefaultButtonScreen'),
  fab: createNavScreenId('button.FabButtonScreen'),
  highlighted: createNavScreenId('button.HighlightedButtonScreen'),
  icon: createNavScreenId('button.IconButtonScreen'),
  outlined: createNavScreenId('button.OutlinedButtonScreen'),
  outlinedShaped: createNavScreenId('button.OutlinedShapedButtonScreen'),
  xfab: createNavScreenId('button.XFabButtonScreen'),
};

const IconNavigation = {
  default: `${appNavigationPrefix}icon.IconScreen`,
};

const ListNavigation = {
  largeIconTwoLines: `${appNavigationPrefix}list.LargeListIconTwoLinesScreen`,
  largeTwoLines: `${appNavigationPrefix}list.LargeListTwoLinesScreen`,
  mediumIcon: `${appNavigationPrefix}list.MediumListIconScreen`,
  // tslint:disable-next-line:max-line-length
  mediumIconCustomTheme: `${appNavigationPrefix}list.MediumListIconCustomThemeScreen`,
  small: `${appNavigationPrefix}list.ListSizeMScreen`,
  smallIcon: `${appNavigationPrefix}list.ListSizeSIconScreen`,
  welcome: `${appNavigationPrefix}list.ListScreen`,
  xlargeIconTwoLines: `${appNavigationPrefix}list.XLargeListIconTwoLinesScreen`,
  xsmall: `${appNavigationPrefix}list.ListSizeXSScreen`,
  xsmallIcon: `${appNavigationPrefix}list.ListSizeXSIconScreen`,
  // tslint:disable-next-line:max-line-length
  xxlargeIconThreeLines: `${appNavigationPrefix}list.XXLargeListIconThreeLinesScreen`,
  xxsmall: `${appNavigationPrefix}list.ListSizeXXSScreen`,
  xxsmallIcon: `${appNavigationPrefix}list.ListSizeXXSIconScreen`,
};

const SurfaceNavigation = {
  default: `${appNavigationPrefix}surface.SurfaceScreen`,
};

const SvgNavigation = {
  default: `${appNavigationPrefix}svg.SvgScreen`,
};

const RfxTextNavigation = {
  default: `${appNavigationPrefix}text.RfxTextScreen`,
};

const TestNavigation = {
  default: `${appNavigationPrefix}test.TestShowcaseScreen`,
};

const TouchableSurfaceNavigation = {
  default: `${appNavigationPrefix}touchableSurface.TouchableSurfaceScreen`,
};

const ViewNavigation = {
  default: `${appNavigationPrefix}view.ViewScreen`,
};

const registerScreens = () => {
  /* APP BAR */
  Navigation.registerComponent(AppBarNavigation.default, () =>
    withAppLogic(DefaultAppBarScreen),
  );
  /* BUTTON */
  Navigation.registerComponent(ButtonNavigation.contained, () =>
    withAppLogic(ContainedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.containedShaped, () =>
    withAppLogic(ContainedShapedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.default, () =>
    withAppLogic(DefaultButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.fab, () =>
    withAppLogic(FabButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.highlighted, () =>
    withAppLogic(HighlightedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.icon, () =>
    withAppLogic(IconButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.outlined, () =>
    withAppLogic(OutlinedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.outlinedShaped, () =>
    withAppLogic(OutlinedShapedButtonShowcaseScreen),
  );
  Navigation.registerComponent(ButtonNavigation.xfab, () =>
    withAppLogic(XFabButtonShowcaseScreen),
  );
  /* ICON */
  Navigation.registerComponent(IconNavigation.default, () =>
    withAppLogic(IconShowcaseScreen),
  );
  /* LIST */
  Navigation.registerComponent(ListNavigation.welcome, () =>
    withAppLogic(ListShowcaseScreen),
  );
  Navigation.registerComponent(ListNavigation.xxsmall, () =>
    withAppLogic(XXSmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.xxsmallIcon, () =>
    withAppLogic(XXSmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.xsmall, () =>
    withAppLogic(XSmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.xsmallIcon, () =>
    withAppLogic(XSmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.small, () =>
    withAppLogic(SmallListScreen),
  );
  Navigation.registerComponent(ListNavigation.smallIcon, () =>
    withAppLogic(SmallListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.mediumIcon, () =>
    withAppLogic(MediumListIconScreen),
  );
  Navigation.registerComponent(ListNavigation.mediumIconCustomTheme, () =>
    withAppLogic(MediumListIconCustomThemeScreen),
  );
  Navigation.registerComponent(ListNavigation.largeTwoLines, () =>
    withAppLogic(LargeListTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.largeIconTwoLines, () =>
    withAppLogic(LargeListIconTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.xlargeIconTwoLines, () =>
    withAppLogic(XLargeListIconTwoLinesScreen),
  );
  Navigation.registerComponent(ListNavigation.xxlargeIconThreeLines, () =>
    withAppLogic(XXLargeListIconThreeLinesScreen),
  );
  /* SURFACE */
  Navigation.registerComponent(SurfaceNavigation.default, () =>
    withAppLogic(SurfaceScreen),
  );
  /* SVG */
  Navigation.registerComponent(SvgNavigation.default, () =>
    withAppLogic(SvgShowcaseScreen),
  );
  /* TEST */
  Navigation.registerComponent(TestNavigation.default, () =>
    withAppLogic(TestShowcaseScreen),
  );
  /* TOUCHABLE SURFACE */
  Navigation.registerComponent(TouchableSurfaceNavigation.default, () =>
    withAppLogic(TouchableSurfaceScreen),
  );
  /* TEXT */
  Navigation.registerComponent(RfxTextNavigation.default, () =>
    withAppLogic(RfxTextScreen),
  );
  /* VIEW */
  Navigation.registerComponent(ViewNavigation.default, () =>
    withAppLogic(ViewScreen),
  );
};

export const AppNavigation = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: ViewNavigation.default,
        },
      },
    });
  });
};
