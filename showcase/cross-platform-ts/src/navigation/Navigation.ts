/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Navigation } from 'react-native-navigation';

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
  TypographyScreen,
  XFabButtonShowcaseScreen,
} from '../screens';
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
  default: `${appNavigationPrefix}list.ListScreen`,
};

const TypographyNavigation = {
  default: `${appNavigationPrefix}typography.TypographyScreen`,
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
  Navigation.registerComponent(ListNavigation.default, () =>
    withAppLogic(ListShowcaseScreen),
  );
  /* TYPOGRAPHY */
  Navigation.registerComponent(TypographyNavigation.default, () =>
    withAppLogic(TypographyScreen),
  );
};

export const AppNavigation = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: IconNavigation.default,
        },
      },
    });
  });
};
