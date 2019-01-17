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
  OutlinedButtonShowcaseScreen,
  OutlinedShapedButtonShowcaseScreen,
  TypographyScreen,
} from '../screens';
import { withAppLogic } from '../withAppLogic';

const registerScreens = () => {
  /* APP BARS */
  Navigation.registerComponent(
    'navigation.showcase.appBars.DefaultAppBarScreen',
    () => withAppLogic(DefaultAppBarScreen),
  );
  /* BUTTONS */
  Navigation.registerComponent(
    'navigation.showcase.buttons.ContainedButtonShowcaseScreen',
    () => withAppLogic(ContainedButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.ContainedShapedButtonShowcaseScreen',
    () => withAppLogic(ContainedShapedButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.DefaultButtonShowcaseScreen',
    () => withAppLogic(DefaultButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.FabButtonShowcaseScreen',
    () => withAppLogic(FabButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.HighlightedButtonShowcaseScreen',
    () => withAppLogic(HighlightedButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.IconButtonShowcaseScreen',
    () => withAppLogic(IconButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.OutlinedButtonShowcaseScreen',
    () => withAppLogic(OutlinedButtonShowcaseScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.OutlinedShapedButtonShowcaseScreen',
    () => withAppLogic(OutlinedShapedButtonShowcaseScreen),
  );
  /* TYPOGRAPHY */
  Navigation.registerComponent(
    'navigation.showcase.typography.TypographyScreen',
    () => withAppLogic(TypographyScreen),
  );
};

export const AppNavigation = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          /* APP BARS */
          // name: 'navigation.showcase.appBars.DefaultAppBarScreen',
          /* BUTTONS */
          name: 'navigation.showcase.buttons.IconButtonShowcaseScreen',
          // name: 'navigation.showcase.buttons.DefaultButtonShowcaseScreen',
          // name: 'navigation.showcase.buttons.OutlinedButtonShowcaseScreen',
          /*name:
            'navigation.showcase.buttons.OutlinedShapedButtonShowcaseScreen',*/
          /* TYPOGRAPHY */
          // name: 'navigation.showcase.typography.TypographyScreen',
        },
      },
    });
  });
};
