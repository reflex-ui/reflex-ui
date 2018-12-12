/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Navigation } from 'react-native-navigation';

import {
  DefaultAppBarScreen,
  DefaultButtonScreen,
  TypographyScreen,
} from '../screens';
import { withAppLogic } from '../withAppLogic';

const registerScreens = () => {
  Navigation.registerComponent(
    'navigation.showcase.appBars.DefaultAppBarScreen',
    () => withAppLogic(DefaultAppBarScreen),
  );
  Navigation.registerComponent(
    'navigation.showcase.buttons.DefaultButtonScreen',
    () => withAppLogic(DefaultButtonScreen),
  );
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
          name: 'navigation.showcase.appBars.DefaultAppBarScreen',
          // name: 'navigation.showcase.buttons.DefaultButtonScreen',
          // name: 'navigation.showcase.typography.TypographyScreen',
        },
      },
    });
  });
};
